import { createStore } from 'vuex';
import axios from 'axios';
import { addProduct, getProducts } from '../services/product';

const store = createStore({
    state: {
        products: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addProduct(state, product) {
            state.products.push(product);
        },
        updateProduct(state, updatedProduct) {
            const index = state.products.findIndex(
                (p) => p.id === updatedProduct.id
            );
            if (index !== -1) {
                state.products.splice(index, 1, updatedProduct);
            }
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const { status, message, data } = await getProducts(); // Call getProducts without arguments
                if (status !== 200) {
                    return;
                }
                commit('setProducts', data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async addProduct({ commit }, product) {
            try {
                const { status, message, data } = await addProduct(product);
                if (status !== 200) {
                    return;
                }
                commit('addProduct', data);
            } catch (error) {
                console.error('Error adding product:', error);
                throw error;
            }
        },
        async updateProduct({ commit }, product) {
            try {
                const response = await axios.put(
                    `/api/products/${product.id}`,
                    product,
                    {
                        headers: {
                            Authorization: `Bearer ${this.state.authToken}`,
                        },
                    }
                );
                commit('updateProduct', response.data);
            } catch (error) {
                console.error('Error updating product:', error);
                throw error;
            }
        },
    },
    getters: {
        products(state) {
            return state.products;
        },
    },
});

export default store;
