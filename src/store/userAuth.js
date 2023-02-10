import { defineStore } from 'pinia';
import { ref } from 'vue';
export const userAuthentication = defineStore('user_auth', () => {
    const userAuthenticationInfo = {
        addedUser: ref({}),
        deletedUser: ref({}),
        updatedUser: ref({}),
    };
    return {
        userAuthenticationInfo,
    };
});
