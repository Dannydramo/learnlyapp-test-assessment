<template>
    <div>
        <Navbar>
            <div class="w-[90%] mx-auto">
                <h1 class="text-2xl font-bold mt-4 mb-1">Products Page</h1>
                <p>A list of all products.</p>
                <div
                    class="flex flex-col sm:flex-row gap-2 sm:items-center my-6 sm:justify-between"
                >
                    <input
                        type="text"
                        placeholder="Search product by name..."
                        v-model="searchQuery"
                        class="px-4 py-2 w-full sm:max-w-96 rounded-md border"
                    />
                    <router-link
                        to="/add-product"
                        class="sm:ml-4 bg-[#5111AD] text-center text-white px-4 py-2 rounded"
                        >Add Product</router-link
                    >
                </div>
                <div
                    v-if="isLoading"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-6"
                >
                    <SkeletonLoader v-for="n in 8" :key="n" />
                </div>
                <div v-else>
                    <div v-if="filteredProducts.length === 0">
                        <p class="mt-12 text-center">No products found.</p>
                    </div>
                    <div
                        v-else
                        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-6"
                    >
                        <div
                            v-for="product in filteredProducts"
                            :key="product.id"
                            class="relative py-6 px-4 border cursor-pointer rounded-lg shadow-md overflow-hidden"
                        >
                            <div class="">
                                <div class="relative">
                                    <div class="relative z-0 ratio ratio-28:20">
                                        <img
                                            :src="product.image"
                                            alt=""
                                            class="absolute w-full h-full top-0 left-0 object-fit rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <h3
                                        className="text-base md:text-xl mt-4 font-semibold"
                                    >
                                        <span>{{ product.productname }}</span>
                                    </h3>
                                    <p className="w-full text-sm my-1 truncate">
                                        {{ product.description }}
                                    </p>
                                    <p>${{ product.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    </div>
</template>

<script setup>
// External imports
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import Navbar from '../../components/Navbar.vue';
import SkeletonLoader from '../../components/SkeletonLoader.vue';

const searchQuery = ref('');

const store = useStore();
const products = computed(() => store.state.products);
const isLoading = ref(true);

onMounted(() => {
    store.dispatch('fetchProducts').then(() => {
        isLoading.value = false;
    });
});

const filteredProducts = computed(() =>
    products.value.filter((product) =>
        product.productname
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
    )
);
</script>

<style scoped></style>
