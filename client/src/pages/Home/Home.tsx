import AppLayout from '../../components/layout/AppLayout';
import File from '../../components/ui/File/File';
import { useAddFile } from '../../hooks/file';
import styles from './Home.module.css';

const Home = () => {
    const handleFileChange = useAddFile();

    return (
        <AppLayout>
            <div id={styles.container}>
                <span id={styles.heading}>
                    Add or remove pages from your PDF in a few clicks.
                </span>
                <File onChange={handleFileChange} />
            </div>
        </AppLayout>
    );
};

export default Home;
