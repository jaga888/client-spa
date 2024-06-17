export interface UserLogin {
    email: string
    password: string
}

export interface UserProfile {
    first_name: string
    last_name: string
}

export interface UserResetPassword {
    email: string
}

export interface ForgotPassword {
    message: string,
}

export interface ChangePassword {
    password: string
    passwordConfirm: string
}