declare namespace NodeJS {
    export interface ProcessEnv {
        CORS_ORIGIN: string;
        REDIS_URL: string;
        DATABASE_URL: string;
        PORT: string;
        SESSION_SECRET: string;
    }
}
