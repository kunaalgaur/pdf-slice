import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div id={styles.container}>
            <span className={styles.text}>
                Terms of Use | Privacy Policy | Agreements and Guidelines
            </span>
            <span id={styles.text}>
                Copyright &copy; 2023 PDF slice. All rights reserved.
            </span>
        </div>
    );
};

export default Footer;
