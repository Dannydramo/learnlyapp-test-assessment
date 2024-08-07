import * as yup from 'yup';
export const createProductSchema = yup.object({
    productname: yup.string().required('Product name is required'),
    description: yup.string().required('Description is required'),
    price: yup
        .number()
        .required('Price is required')
        .positive('Price must be a positive number'),
});