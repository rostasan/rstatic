import { Blog } from 'models/blog';
import { User } from './models/auth-form';
export interface State {
    user: User;
    blog: Blog[];
    [key: string]: any;
}
