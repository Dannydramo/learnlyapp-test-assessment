import * as yup from 'yup';

export const registerSchema = yup.object({
   username: yup.string().required('User Name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string().required('Confirm Password is required'),
});

export const loginSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
});
