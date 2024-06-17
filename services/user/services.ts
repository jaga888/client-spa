import {routes} from "~/services/user/routes";
import type {_AsyncData} from "#app/composables/asyncData";
import {api} from "~/composables/api";

export const userService = {
    forgotPasswordApi: (email: string) => {

        return api(routes.forgotPassword.path, {
            method: 'POST',
            body: JSON.stringify({email}),
        })
    },
    changePasswordApi: (password: string, passwordConfirm: string) => {

        return api(routes.changePassword.path, {
            method: 'POST',
            body: JSON.stringify({password, passwordConfirm}),
        })
    }
}
