export type __APPLICATION_CONFIG__ = {
    baseBotUrl: string;
    routes: Readonly<{
        notfound: string;
        bills_form: string;
    }>;
};

export const __APPLICATION__: __APPLICATION_CONFIG__ = {
    baseBotUrl: import.meta.env.VITE_PUBLIC_BOT_URL,
    routes: {
        notfound: '*',
        bills_form: '/',
    }
}