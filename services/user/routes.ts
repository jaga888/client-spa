export const routes = {
    forgotPassword: {
        path: '/forgot-password',
        method: 'POST',
        handler: 'userService.forgotPasswordApi'
    },
    changePassword: {
        path: '/change-password',
        method: 'POST',
        handler: 'userService.changePasswordApi'
    }
}
