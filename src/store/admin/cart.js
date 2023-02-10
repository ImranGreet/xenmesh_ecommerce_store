import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartInfo = defineStore('cart', () => {
    const cartInfo = {
        allCart: ref([]),
        singleCart: ref([]),
        cartInLimit: ref([]),
        cartInSort: ref([]),
        cartInDate: ref([]),
        userCart: ref([]),
        addACart: ref([]),
        updateACart: ref([]),
        deleteAcart: ref([]),
    };
    return {
        cartInfo,
    };
});
