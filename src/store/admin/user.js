import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useUserInformation = defineStore('users', () => {
    const userDetails = {
        singleUser: ref({}),
        users: ref([]),
        usersInSort: ref([]),
        usersInLimit: ref([]),
    };
    const getSingleUser = async function (id) {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                `https://fakestoreapi.com/users/${id}`
            );

            // Extract the data from the response
            userDetails.singleUser = response.data;
        } catch (error) {
            return null;
        }
    };
    const getAllUsers = async function () {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(`https://fakestoreapi.com/users`);

            // Extract the data from the response
            userDetails.users = response.data;
        } catch (error) {
            return null;
        }
    };
    const getAllUsersInLimit = async function (payload) {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                `https://fakestoreapi.com/users?limit=${payload}`
            );

            // Extract the data from the response
            userDetails.users = response.data;
        } catch (error) {
            return null;
        }
    };
    const getAllUsersInSort = async function (payload = 'desc') {
        try {
            // Make a GET request to the database API endpoint
            const response = await axios.get(
                `https://fakestoreapi.com/users?sort=${payload}`
            );

            // Extract the data from the response
            userDetails.usersInSort = response.data;
        } catch (error) {
            return null;
        }
    };
    return {
        userDetails,
        /*methods*/
        getSingleUser,
        getAllUsers,
        getAllUsersInLimit,
        getAllUsersInSort,
    };
});
