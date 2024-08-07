import axios from 'axios';
import { cloudinaryConfig } from '../utils/cloudinary';

export const uploadImage = async (file) => {
    if (!file) {
        throw new Error('No file provided for upload.');
    }

    try {
        const base64Data = await readFileAsBase64(file);
        const formData = new FormData();
        formData.append('file', base64Data);
        formData.append('upload_preset', cloudinaryConfig.uploadPreset);

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: false,
            }
        );

        return response.data.secure_url;
    } catch (error) {
        console.error('Error uploading logo:', error);
        throw error;
    }
};

const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (reader.result) {
                resolve(reader.result.toString());
            } else {
                reject(new Error('Failed to read file as base64'));
            }
        };
        reader.onerror = (error) => reject(error);
    });
};
