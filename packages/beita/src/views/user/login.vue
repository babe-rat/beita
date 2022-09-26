<template>
    <div class="main">
        <div class="login-box">
            <div class="form">
                <el-form label-position="top" ref="ruleFormRef" :model="ruleForm" :rules="rules">
                    <el-form-item :label="__i18n(APP_LOGIN_FORM_USERNAME)" prop="userName">
                        <el-input v-model="ruleForm.userName" />
                    </el-form-item>
                    <el-form-item :label="__i18n(APP_LOGIN_FORM_PASSWORD)" prop="password">
                        <el-input show-password type="password" v-model="ruleForm.password" />
                    </el-form-item>
                </el-form>
            </div>
            <div class="submit">
                <el-button
                    type="primary"
                    style="width: 100%"
                    :loading="loading"
                    @click="submit(ruleFormRef)"
                >
                    {{ __i18n(APP_LOGIN_SUBMIT) }}
                </el-button>
                <div class="message">
                    {{ errorMsg }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw, getCurrentInstance } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useLocaleStore, useUserStore } from '../../store'
import {
    APP_LOGIN_FORM_USERNAME,
    APP_LOGIN_FORM_PASSWORD,
    APP_LOGIN_SUBMIT,
    APP_LOGIN_FORM_USERNAME_REQUIRED_MESSAGE,
    APP_LOGIN_FORM_PASSWORD_REQUIRED_MESSAGE,
} from '../../i18n/locales'

const errorMsg = ref()
const loading = ref(false)

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    userName: '',
    password: '',
})

const localeStore = useLocaleStore()
const rules = reactive<FormRules>({
    userName: [
        {
            required: true,
            message: localeStore.getMessage(APP_LOGIN_FORM_USERNAME_REQUIRED_MESSAGE),
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: localeStore.getMessage(APP_LOGIN_FORM_PASSWORD_REQUIRED_MESSAGE),
            trigger: 'blur',
        },
    ],
})

const globalProperties = getCurrentInstance()?.appContext.config.globalProperties

const submit = (formEl: FormInstance | undefined) => {
    if (!formEl) {
        return false
    }
    formEl.validate(valid => {
        if (valid) {
            const userStore = useUserStore()
            loading.value = true
            userStore
                .login(toRaw(ruleForm))
                .then(() => {
                    globalProperties?.$router.push('/dashboard')
                })
                .catch((error: Error) => {
                    errorMsg.value = error.message
                })
                .finally(() => {
                    loading.value = false
                })
        }
    })
}
</script>

<style lang="scss" scoped>
.main {
    height: 100vh;
    background: linear-gradient(to top right, #9933ff 40%, #ff6600 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-x: hidden;
    position: relative;
}
.login-box {
    --el-text-color-regular: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgb(0 0 0 / 60%);
    border-radius: 10px;
}
::v-deep(.el-form-item__label) {
    &::before {
        content: '' !important;
    }
}
::v-deep(.el-input__inner) {
    color: var(--be-text-color);
}
.submit {
    position: relative;
    margin-top: 36px;
    .message {
        position: absolute;
        top: 40px;
        color: var(--be-color-danger);
        font-size: 12px;
    }
}
</style>
