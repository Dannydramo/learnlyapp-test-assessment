<template>
    <Navbar>
        <div class="w-[90%] sm:w-[70%] md:max-w-2xl mt-12 mx-auto">
            <h1 class="text-2xl font-bold mb-1 text-[#5111AD]">
                Add New Product
            </h1>
            <p class="mt-1">Add your product for your users to see</p>
            <div class="bg-white rounded-md mt-6 p-6">
                <Form
                    :validation-schema="createProductSchema"
                    @submit="onSubmit"
                >
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1" for="name"
                            >Product Name</label
                        >
                        <Field
                            name="productname"
                            as="input"
                            type="text"
                            id="productname"
                            class="px-4 py-2 w-full rounded border"
                            required
                        />
                        <ErrorMessage
                            name="productname"
                            class="text-red-500 text-sm"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-sm font-medium mb-1"
                            for="description"
                            >Description</label
                        >
                        <Field
                            name="description"
                            as="textarea"
                            id="description"
                            class="px-4 py-2 w-full rounded border"
                            required
                        />
                        <ErrorMessage
                            name="description"
                            class="text-red-500 text-sm"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-sm font-medium mb-1"
                            for="price"
                            >Price</label
                        >
                        <Field
                            name="price"
                            as="input"
                            type="number"
                            id="price"
                            class="px-4 py-2 w-full rounded border"
                            required
                        />
                        <ErrorMessage
                            name="price"
                            class="text-red-500 text-sm"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-sm font-medium mb-1"
                            for="image"
                            >Image</label
                        >
                        <input
                            @change="handleImageUpload"
                            type="file"
                            id="image"
                            class="px-4 py-2 w-full rounded border"
                            required
                        />
                    </div>
                    <Button
                        text="Submit"
                        :isLoading="isLoading"
                        class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold leading-6 transition duration-150 ease-in-out rounded-md shadow bg-[#5111AD] text-white p-2 w-full h-12 focus:border"
                    />
                </Form>
            </div>
        </div>
    </Navbar>
</template>

<script setup>
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { toast } from 'vue3-toastify';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { createProductSchema } from '../../validators/product';
import { uploadImage } from '../../services/upload';
import Button from '../../components/Button.vue';
import Navbar from '../../components/Navbar.vue';

const isLoading = ref(false);
const fileImage = ref(null);
const store = useStore();
const router = useRouter();

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    fileImage.value = file;
};

const onSubmit = async (values) => {
    isLoading.value = true;
    try {
        const image = await uploadImage(fileImage.value);
        values.image = image;
        await store.dispatch('addProduct', values);
        isLoading.value = false;
        toast.success('Product added successfully');
        router.push('/');
    } catch (error) {
        isLoading.value = false;
        toast.error('Error adding product');
    }
};
</script>

<style scoped></style>
