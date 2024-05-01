// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://milage.ualg.pt/mlv2/api/'
});

// Função para autenticação e obtenção do token
export const authenticateUser = async (email, password, language) => {
    try {
        const response = await apiClient.post('login/', {
            email: email,
            password: password,
            language: language
        });
        return response.data.token;  // Supondo que o token está no campo 'data.token'
    } catch (error) {
        console.error('Authentication error:', error);
        throw error;
    }
};

// Configurar o token para todas as requisições após autenticação
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};

// Função para buscar os layouts de página
export const fetchPageLayout = async (pageCode) => {
    try {
        const response = await apiClient.get(`page-layouts/${pageCode}`);
        return response.data;  // Supondo que os dados desejados estão no campo 'data'
    } catch (error) {
        console.error('Failed to fetch page layout:', error);
        throw error;
    }
};

export default apiClient;
