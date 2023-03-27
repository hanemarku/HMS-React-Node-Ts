// import { FormHelperText } from '@mui/material';
// import React, { useCallback } from 'react';
// import { Controller, useController, useFormContext } from 'react-hook-form';
//
// type FileUpLoaderProps = {
//     multiple?: boolean;
//     name: string;
// };
// const FileUpLoader: React.FC<FileUpLoaderProps> = ({
//                                                        name,
//                                                        multiple = false,
//                                                    }) => {
//     const {
//         control,
//         formState: { errors },
//     } = useFormContext();
//     const { field } = useController({ name, control });
//
//     const onFileDrop = useCallback(
//         (e: React.SyntheticEvent<EventTarget>) => {
//             const target = e.target as HTMLInputElement;
//             if (!target.files) return;
//             const newFile = Object.values(target.files).map((file: File) => file);
//             field.onChange(newFile[0]);
//         },
//
//         [field]
//     );
//     // @ts-ignore
//     // @ts-ignore
//     return (
//         <Controller
//             name={name}
//             defaultValue=''
//             control={control}
//             render={({ field: { name, onBlur, ref } }) => (
//                 <>
//                     <input
//                         type='file'
//                         name={name}
//                         onBlur={onBlur}
//                         ref={ref}
//                         onChange={onFileDrop}
//                         multiple={multiple}
//                         accept='image/jpg, image/png, image/jpeg'
//                     />
//                     <FormHelperText error={!!errors[name]}>
//                         {errors[name] ? errors[name]?.message : ''}
//                     </FormHelperText>
//                 </>
//             )}
//         />
//     );
// };

// export default FileUpLoader;




import React, { useState } from 'react';

interface ImageUploadProps {
    onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload, value }) => {
    const [image, setImage] = useState<File | undefined>(undefined);
    const [preview, setPreview] = useState<string | undefined>(undefined);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files && event.target.files[0];

        if (selectedImage) {
            setImage(selectedImage);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImage(undefined);
            setPreview(undefined);
        }
    };

    const handleUpload = () => {
        if (image) {

            setImage(undefined);
            setPreview(undefined);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            {preview && <img src={value ?? preview}  alt="Selected image preview" />}
            {image && (
                <div>
                    <p>Selected file: {image.name}</p>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            )}
        </div>
    );
};
