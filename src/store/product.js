import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useProductsStore = defineStore('products', () => {
    /*handle error*/
    const productsStore = {
        products: ref(),
        productsAccordingToCategory: ref([]),
        categories: ref([]),
        singleProduct: ref({}),
        paginationProducts: ref([]),
        sortProducts: ref([]),
    };

    const loadProducts = async function () {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );

            // Extract the data from the response
            productsStore.products.value = response.data;
        } catch (error) {
            return null;
        }
    };
    const productsAccordingToCat = async function (payload) {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                `https://fakestoreapi.com/products/category/${payload}}`
            );

            productsStore.productsAccordingToCategory.value = response.data;
        } catch (error) {
            return null;
        }
    };
    const productsCategories = async function () {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                'https://fakestoreapi.com/products/categories'
            );

            productsStore.categories.value = response.data;
        } catch (error) {
            return null;
        }
    };
    const getSingleProduct = async function (id) {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            );

            productsStore.singleProduct.value = response.data;
        } catch (error) {
            return null;
        }
    };
    const getProductsInLimit = async function (payload) {
        try {
            // Make a GET request to the database API endpoint

            const response = await axios.get(
                `https://fakestoreapi.com/products?limit=${payload}`
            );

            productsStore.paginationProducts.value = response.data;
        } catch (error) {
            return null;
        }
    };
    const getProductsInSort = async function (payload = 'desc') {
        try {
            // Make a GET request to the database API endpoint

            const response = await axios.get(
                `https://fakestoreapi.com/products?sort=${payload}`
            );

            productsStore.sortProducts.value = response.data;
        } catch (error) {
            return null;
        }
    };
    return {
        productsStore,
        //methods
        loadProducts,
        productsAccordingToCat,
        productsCategories,
        getSingleProduct,
        getProductsInLimit,
        getProductsInSort,
    };
});
