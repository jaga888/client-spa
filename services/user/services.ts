import type {ForgotPassword} from "~/services/user/types";
import {routes} from "~/services/user/routes";
import {useAPIFetch} from "~/composables/useAPIFetch";
import type {_AsyncData} from "#app/composables/asyncData";

export const userService = {
    forgotPasswordApi: (email: string) => {

        return useAPIFetch(routes.forgotPassword.path, {
            method: 'POST',
            body: JSON.stringify({email}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    },
}
