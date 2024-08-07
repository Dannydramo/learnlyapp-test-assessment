<template>
    <main class="bg-[#f5f5f5] min-h-screen">
        <nav class="shadow-custom-light py-5 bg-white">
            <div class="w-[90%] mx-auto flex items-center justify-between">
                <div class="flex items-center space-x-1">
                    <img src="../assets/logo.svg" alt="" />
                    <p class="font-semibold text-xl">
                        <span>LearnlyApp</span> <span class="">Assessment</span>
                    </p>
                </div>
                <div class="">
                    <p class="hidden sm:block font-semibold">
                        {{ user.username }}
                    </p>
                    <p class="block sm:hidden font-semibold">
                        {{ initialValue }}
                    </p>
                </div>
            </div>
        </nav>
        <main class="">
            <slot></slot>
        </main>
    </main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { LocalStorage } from '../helpers/localStorageHelper';

const user = ref({});

onMounted(() => {
    const userDetails = LocalStorage.getItem('userDetails');
    user.value = userDetails.user;
});

const initialValue = computed(() => {
    if (user.value.username) {
        return user.value.username
            .split(' ')
            .map((word) => word.charAt(0))
            .join('')
            .toUpperCase();
    }
    return '';
});
</script>
