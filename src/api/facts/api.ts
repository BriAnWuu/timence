import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://uselessfacts.jsph.pl/api/v2"
})

///facts/random
const getRandomFact = async () => {
    const response  = await apiClient.request({
        url: "/facts/today",
        method: "GET",
    })
    return response.data;
}


export default {
    getRandomFact
};
