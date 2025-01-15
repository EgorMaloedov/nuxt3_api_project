// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    ssr: true,

    css: [
        '@/assets/styles/master.css'
    ],
    modules: ['@nuxt/image', 'nuxt-route-meta']
})