// / <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_BOT_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}