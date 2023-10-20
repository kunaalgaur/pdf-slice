import { useState } from 'react';
import Input from '../../ui/Input/Input';
import styles from './SigninForm.module.css';
import Button from '../../ui/Button/Button';

const SigninForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    console.log({
        email: email,
        password: password,
    });
    return (
        <form action="" id={styles.container}>
            <Input
                type="email"
                name="email"
                text="Please enter your email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                name="password"
                text="Please create a password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" text="Sign up" />
        </form>
    );
};

export default SigninForm;
