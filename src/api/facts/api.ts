import axios from "axios";

// API layer
const apiClient = axios.create({
    baseURL: "https://uselessfacts.jsph.pl/api/v2"
})

// End points
const getRandomFact = async () => {
    const response  = await apiClient.request({
        url: "/facts/random",
        method: "GET",
    })
    return response.data;
}


export default {
    getRandomFact
};
