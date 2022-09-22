export const APP_NO_ACCESS = 'app.no.access'
export const APP_LOGIN_SUBMIT = 'app.login.submit'
export const APP_LOGIN_FORM_USERNAME = 'app.login.form.username'
export const APP_LOGIN_FORM_PASSWORD = 'app.login.form.password'
export const APP_LOGIN_FORM_USERNAME_REQUIRED_MESSAGE = 'app.login.form.username.message'
export const APP_LOGIN_FORM_PASSWORD_REQUIRED_MESSAGE = 'app.login.form.password.message'
export const APP_LOGOUT = 'app.logout'

export interface LocaleMessage {
    [APP_LOGIN_SUBMIT]: string
    [APP_NO_ACCESS]: string
    [APP_LOGIN_FORM_USERNAME]: string
    [APP_LOGIN_FORM_PASSWORD]: string
    [APP_LOGIN_FORM_USERNAME_REQUIRED_MESSAGE]: string
    [APP_LOGIN_FORM_PASSWORD_REQUIRED_MESSAGE]: string
    [APP_LOGOUT]: string
}

export const BEITA_LOCALE_MESSAGE: LocaleMessage = {
    [APP_LOGIN_SUBMIT]: '登录',
    [APP_NO_ACCESS]: '您暂无权限访问，请重新登录',
    [APP_LOGIN_FORM_USERNAME]: '用户名',
    [APP_LOGIN_FORM_PASSWORD]: '密码',
    [APP_LOGIN_FORM_USERNAME_REQUIRED_MESSAGE]: '请输入用户名',
    [APP_LOGIN_FORM_PASSWORD_REQUIRED_MESSAGE]: '请输入密码',
    [APP_LOGOUT]: '退出登录',
}
