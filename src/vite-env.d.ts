/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly FIREBASE_apiKey: string
    readonly FIREBASE_authDomain: string
    readonly FIREBASE_projectId: string
    readonly FIREBASE_storageBucket: string
    readonly FIREBASE_messagingSenderId: string
    readonly FIREBASE_appId: string
    readonly FIREBASE_measurementId: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}