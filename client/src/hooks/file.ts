import toast from 'react-hot-toast';

export const useAddFile = () => {
    const handleFileChange:
        | React.ChangeEventHandler<HTMLInputElement>
        | undefined = (e) => {
        e.preventDefault();
        try {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
                if (selectedFile.type === 'application/pdf') {
                    console.log('Selected file is a PDF: ', selectedFile.name);
                } else {
                    return toast.error(
                        'Selected file is not a PDF, please select a PDF to continue.'
                    );
                }
            }
        } catch (error) {
            return toast.error('An unknown error occured.');
        }
    };

    return handleFileChange;
};
