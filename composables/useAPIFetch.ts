import {useFetch} from "#app"

type useFetchType = typeof useFetch
export const useAPIFetch: useFetchType = (path, options = {}) => {
    const config = useRuntimeConfig()

    // modify options as needed
    options.baseURL = config.public.HOST_API
    return useFetch(path, options)
}