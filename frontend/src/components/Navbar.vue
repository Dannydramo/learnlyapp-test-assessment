<template>
    <main class="bg-[#f5f5f5] min-h-screen">
        <nav class="shadow-custom-light py-5 bg-white">
            <div class="w-[90%] mx-auto">
                <div class="flex items-center space-x-1">
                    <img src="../assets/logo.svg" alt="" />
                    <p class="font-semibold text-xl">
                        <span>LearnlyApp</span> <span class="">Assessment</span>
                    </p>
                </div>
            </div>
        </nav>
        <main class="">
            <slot></slot>
        </main>
    </main>
</template>

<script setup></script>
