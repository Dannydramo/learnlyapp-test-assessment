<template>
    <div class="bg-[#f5f5f5] min-h-screen">
        <div>
            <div class="px-4 lg:px-8 py-4">
                <div class="flex items-center space-x-1">
                    <img src="../../assets/logo.svg" alt="" />
                    <p class="font-semibold text-xl">
                        <span>LearnlyApp</span> <span class="">Assessment</span>
                    </p>
                </div>
                <div
                    class="mt-6 lg:mt-8 p-6 bg-white rounded-lg w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] mx-auto max-w-[1600px]"
                >
                    <h3 class="text-center font-bold text-xl">Register</h3>
                    <div class="mt-8 mb-4 px-1 lg:px-4">
                        <Form
                            :validation-schema="registerSchema"
                            @submit="onSubmit"
                        >
                            <div class="grid grid-cols-1 mt-4">
                                <div>
                                    <p
                                        class="mb-2 font-bold text-xs lg:text-md"
                                    >
                                        User Name
                                    </p>
                                    <Field
                                        name="username"
                                        type="text"
                                        class="w-full h-12 border border-gray-200 rounded-md px-2"
                                        placeholder="John Doe"
                                    />
                                    <ErrorMessage
                                        name="username"
                                        class="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 mt-4">
                                <div>
                                    <p
                                        class="mb-2 font-bold text-xs lg:text-md"
                                    >
                                        Email
                                    </p>
                                    <Field
                                        name="email"
                                        type="email"
                                        class="w-full h-12 border border-gray-200 rounded-md px-2"
                                        placeholder="johndoe@gmail.com"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        class="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 mt-6">
                                <div>
                                    <p
                                        class="mb-2 font-bold text-xs lg:text-md"
                                    >
                                        Password
                                    </p>
                                    <div class="relative">
                                        <Field
                                            name="password"
                                            :type="
                                                togglePasswordVisibility.togglePassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            class="w-full h-12 border border-gray-200 rounded-md px-2"
                                            placeholder="**********"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            class="text-red-500 text-sm"
                                        />
                                        <div
                                            @click="
                                                togglePasswordVisibility.togglePassword =
                                                    !togglePasswordVisibility.togglePassword
                                            "
                                            class="absolute right-4 bottom-4"
                                        >
                                            <svg
                                                v-if="
                                                    togglePasswordVisibility.togglePassword
                                                "
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                                                />
                                            </svg>
                                            <svg
                                                v-else
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 640 512"
                                            >
                                                <path
                                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 mt-6">
                                <div>
                                    <p
                                        class="mb-2 font-bold text-xs lg:text-md"
                                    >
                                        Confirm Password
                                    </p>
                                    <div class="relative">
                                        <Field
                                            name="confirmPassword"
                                            :type="
                                                togglePasswordVisibility.toggleConfirmPassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            class="w-full h-12 border border-gray-200 rounded-md px-2"
                                            placeholder="**********"
                                        />
                                        <ErrorMessage
                                            name="confrimPassword"
                                            class="text-red-500 text-sm"
                                        />
                                        <div
                                            @click="
                                                togglePasswordVisibility.toggleConfirmPassword =
                                                    !togglePasswordVisibility.toggleConfirmPassword
                                            "
                                            class="absolute right-4 bottom-4"
                                        >
                                            <svg
                                                v-if="
                                                    togglePasswordVisibility.toggleConfirmPassword
                                                "
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                                                />
                                            </svg>
                                            <svg
                                                v-else
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 640 512"
                                            >
                                                <path
                                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8">
                                <Button
                                    text="Register"
                                    :isLoading="isLoading"
                                    class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold leading-6 transition duration-150 ease-in-out rounded-md shadow bg-[#5111AD] text-white p-2 w-full h-12 focus:border"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="text-center text-sm">
                        Already have an account?
                        <router-link to="/login" class="underline font-bold"
                            >Login</router-link
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// External imports
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

// Internal imports
import Button from '../../components/Button.vue';
import { registerSchema } from '../../validators/onboarding';
import { processRegister } from '../../services/onboarding';

const router = useRouter();
const isLoading = ref(false);
const togglePasswordVisibility = ref({
    togglePassword: false,
    toggleConfirmPassword: false,
});

async function onSubmit(values) {
    isLoading.value = true;
    const { status, data, message } = await processRegister(values);
    if (status !== 200) {
        isLoading.value = false;
        toast.error(message);
        return;
    }

    isLoading.value = false;
    toast.success(message);
    setTimeout(() => {
        router.push('/login');
    }, 1000);
}
</script>
