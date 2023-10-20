import { Link, useNavigate } from 'react-router-dom';
import styles from './Topbar.module.css';
import { useAppSelector } from '../../../redux/hooks';
import Button from '../../ui/Button/Button';

const Topbar = () => {
    const { isUserLoggedIn } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    return (
        <nav id={styles.container}>
            <Link id={styles.logoContainer} to="/">
                <img
                    src="/pdf.png"
                    alt="Error loading image"
                    id={styles.logoImg}
                />
                <span id={styles.logo}>PDF slice</span>
            </Link>
            {isUserLoggedIn ? (
                <div id={styles.linksContainer}>
                    <Link to="/about-us" className={styles.link}>
                        About us
                    </Link>
                    <Link to="/contact-us" className={styles.link}>
                        Contact up
                    </Link>
                    <Link to="/user" className={styles.link}>
                        User
                    </Link>
                </div>
            ) : (
                <div id={styles.buttonContainer}>
                    <Button
                        type={undefined}
                        text="Sign in"
                        onClick={() => navigate('/sign-in')}
                    />
                    <Button
                        type={undefined}
                        text="Sign up"
                        onClick={() => navigate('/sign-up')}
                    />
                </div>
            )}
        </nav>
    );
};

export default Topbar;
