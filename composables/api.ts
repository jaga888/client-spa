const config = useRuntimeConfig();
const {
    token
} = useAuth();
export const api = $fetch.create({
    baseURL: config.public.HOST_API,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token.value}`,
        'Accept': '*/*',
    },
    mode: 'cors',
    credentials: "same-origin",
})