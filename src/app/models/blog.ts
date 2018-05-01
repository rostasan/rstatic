export interface Blog {
    title?: string;
    description?: string;
    timestamp?: string;
    body?: string;
    $key: string;
    $exists: () => boolean;
}