import { useState } from 'react';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './SignupForm.module.css';

const SignupForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    console.log({
        name: name,
        email: email,
        password: password,
    });

    return (
        <form action="" id={styles.container}>
            <Input
                type="text"
                name="name"
                text="Please enter your name"
                onChange={(e) => setName(e.target.value)}
            />
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

export default SignupForm;
