import AppLayout from '../../components/layout/AppLayout';
import { about } from '../../constants/about';
import styles from './About.module.css';

const About = () => {
    return (
        <AppLayout>
            <div id={styles.container}>
                <span id={styles.heading}>About Us</span>
                {about.map((e, index) => {
                    return (
                        <span key={index} id={styles.text}>
                            {e}
                        </span>
                    );
                })}
            </div>
        </AppLayout>
    );
};

export default About;
