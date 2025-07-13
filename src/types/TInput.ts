export type TInput = {
    className?: string;
    user?: {
        name: {
            first: string;
            last: string;
        };
        [key: string]: any;
    };
    labelId?: string;
    type?: string;
};