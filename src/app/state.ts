import { Blog } from 'models/blog';
import { Serial } from 'models/serial';
import { User } from 'models/auth-form';
export interface State {
    user: User;
    blog: Blog[];
    serial: Serial[];
    [key: string]: any;
}
