export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            HOST_API: process.env.HOST_API
        }
    },
    ssr: false,
    app: {
        head: {
            title: "Senex",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@use \"/assets/scss/senex.scss\" as *;"
                }
            }
        }
    },
    modules: [
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "@sidebase/nuxt-auth",
        "@vueuse/nuxt",
    ],
    auth: {
        provider: {
            type: "local",
            endpoints: {
                signIn: {path: '/login', method: 'post'},
                signOut: {path: '/logout', method: 'post'},
                getSession: {path: '/session', method: 'get'}
            },
            pages: {
                login: '/account/login'
            },
            sessionDataType: {
                id: "number",
                first_name: "string",
                last_name: "string",
                roles: "[]",
            },
            token: {
                maxAgeInSeconds: 20000,
            }
        },
        baseURL: process.env.HOST_API,
        globalAppMiddleware: {
            isEnabled: true,
            allow404WithoutAuth: false,
        },
    },
    devtools: {
        enabled: true
    },
    tailwindcss: {
        configPath: "tailwind.config.js",
        exposeConfig: false,
        injectPosition: 0,
    },
});
