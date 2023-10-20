import SigninForm from '../../components/forms/SigninForm/SigninForm';
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div>
            <div id={styles.container}>
                <div id={styles.wrapper}>
                    <span id={styles.heading}>Welcome to PDF slice!</span>
                    <span id={styles.text}>
                        Please create an account to continue.
                    </span>
                    <SigninForm />
                    <span id={styles.text}>
                        Already a user? <Link to="/sign-in">Sign in</Link>.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signin;
