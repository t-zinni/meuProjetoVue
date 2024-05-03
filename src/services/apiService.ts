// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://milage.ualg.pt/mlv2/api/'
});



export const authenticateUser = async (email: string, password: string, language: string) => {
    try {
        const response = await apiClient.post('login/', {
            email: email,
            password: password,
            language: language
        });
        return response.data.token;
    } catch (error) {
        console.error('Authentication error:', error);
        throw error;
    }
};

export const setAuthToken = (token: string) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};

export const fetchPageLayout = async (pageCode: string) => {
    try {
        const response = await apiClient.get(`page-layouts/${pageCode}`);
        return response.data; 
    } catch (error) {
        console.error('Failed to fetch page layout:', error);
        throw error;
    }
};

export default apiClient;
