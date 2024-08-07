<template>
    <div>
        <Navbar>
            <div class="w-[90%] mx-auto">
                <h1 class="text-2xl font-bold mt-4 mb-1">Products Page</h1>
                <p>A list a ll products.</p>
                <div class="flex items-center my-6 justify-between">
                    <input
                        type="text"
                        placeholder="Search product by name..."
                        v-model="searchQuery"
                        class="px-4 py-2 w-80 max-w-96 rounded-md border"
                    />
                    <router-link
                        to="/add-product"
                        class="ml-4 bg-[#5111AD] text-white px-4 py-2 rounded"
                        >Add Product</router-link
                    >
                </div>
                <div v-if="filteredProducts.length === 0">
                    <p class="mt-12 text-center">No products found.</p>
                </div>
                <div
                    v-else
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    <div
                        v-for="product in filteredProducts"
                        :key="product.id"
                        class="relative py-6 px-4 border cursor-pointer rounded-lg shadow-md overflow-hidden"
                    >
                        <div class="">
                            <div class="relative">
                                <div class="productCard__image ratio ratio-28:20">
                                    <img
                                        :src="product.image"
                                        alt=""
                                        class="absolute w-full h-full top-0 left-0 object-fit rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <h3 className="text-base md:text-xl mt-4 font-semibold">
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
        </Navbar>
    </div>
</template>

<script setup>
// External imports
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import Navbar from '../../components/Navbar.vue';

const searchQuery = ref('');

const store = useStore();
const products = computed(() => store.state.products);

onMounted(() => {
    store.dispatch('fetchProducts');
});

const filteredProducts = computed(() =>
    products.value.filter((product) =>
        product.productname.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);
</script>

<style scoped></style>
