import axios from "axios";

// API layer
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_FACTS,
    timeout: 1000,
});

// End points
const getRandomFact = async () => {
    const response = await apiClient.request({
        url: "/facts/random",
        method: "GET",
    });
    return response;
};

export default {
    getRandomFact,
};
