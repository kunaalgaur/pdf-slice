import styles from './Button.module.css';
import ReactLoading from 'react-loading';

type Props = {
    type: 'button' | 'submit' | 'reset' | undefined;
    text: string;
    loading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ type, text, loading, onClick }: Props) => {
    return (
        <button
            type={type}
            disabled={loading}
            onClick={onClick}
            id={styles.button}>
            {loading ? <ReactLoading type="spin" color="white" /> : text}
        </button>
    );
};

export default Button;
