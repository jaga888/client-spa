export interface UserLogin {
    email: string
    password: string
}

export interface UserProfile {
    first_name: string
    last_name: string
    roles: { id: number, name: string }[]
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

export interface Announcement {
    id: number
    title: string
    createdAt: {
        date: string;
    };
    unread: boolean
}