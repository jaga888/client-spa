const config = useRuntimeConfig();
export const api = $fetch.create({
    baseURL: config.public.HOST_API,
    headers: {
        'Content-Type': 'application/json',
    },
})