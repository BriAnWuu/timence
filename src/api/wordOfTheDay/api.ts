import axios from "axios";

// API layer
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_WORDOFTHEDAY,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// End points
const getWordOfTheDay = async (date?: string) => {
    const response = await apiClient.request({
        url: "/words.json/wordOfTheDay",
        method: "GET",
        params: {
            api_key: import.meta.env.VITE_APP_API_KEY_WORDOFTHEDAY,
            date: date,
        },
    });
    return response;
};

export default {
    getWordOfTheDay,
};
