export interface Blog {
    title?: string;
    description?: string;
    body?: string;
    timestamp?: number;
    $key?: string;
    $exists?: () => boolean;
}
