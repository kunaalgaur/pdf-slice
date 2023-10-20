import SignupForm from '../../components/forms/SignupForm/SignupForm';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <span id={styles.heading}>Welcome to PDF slice!</span>
                <span id={styles.text}>
                    Please create an account to continue.
                </span>
                <SignupForm />
                <span id={styles.text}>
                    Already a user? <Link to="/sign-in">Sign in</Link>.
                </span>
            </div>
        </div>
    );
};

export default Signup;
