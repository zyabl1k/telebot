export type ResponseModel<T> = {
    status: number;
    message: string;
    data?: T;
};