export interface UserLoginRequestParams {
    userName: string
    password: string
}

export interface UserLoginResponseParams {
    accessToken: string
}

export function login(requestParams: UserLoginRequestParams): Promise<UserLoginResponseParams> {
    const { userName, password } = requestParams
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(() => {
                resolve({
                    accessToken: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
                })
            }, 200)
        } else {
            reject(new Error('账户或密码错误'))
        }
    })
}

export interface UserResponseResult {
    userId: string
    userName: string
    avatar: string
}

export function getCurrentUser(): Promise<UserResponseResult> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                userId: '123456',
                userName: 'Admin',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            })
        }, 200)
    })
}

export async function logout(): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 200)
    })
}

export default {
    login,
    logout,
    getCurrentUser,
}
