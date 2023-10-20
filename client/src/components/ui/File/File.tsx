import styles from './File.module.css';

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const File = ({ onChange }: Props) => {
    return (
        <label htmlFor="file" id={styles.container}>
            <span id={styles.text}>Select a PDF</span>
            <input
                type="file"
                name="file"
                id="file"
                hidden
                onChange={onChange}
            />
        </label>
    );
};

export default File;
