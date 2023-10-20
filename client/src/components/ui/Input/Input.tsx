import styles from './Input.module.css';

type Props = {
    name: string;
    type: string;
    text: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ name, type, text, onChange }: Props) => {
    return (
        <label htmlFor={name} id={styles.container}>
            <span id={styles.text}>{text}</span>
            <input
                type={type}
                onChange={onChange}
                name={name}
                id={styles.input}
            />
        </label>
    );
};

export default Input;
