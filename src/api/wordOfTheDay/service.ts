import WordnikApi from "./api";

const getWordOfTheDay = async (api = WordnikApi) => {
    const response = await api.getWordOfTheDay();
    const wordOfTheDayData = response.data;
    return wordOfTheDayData;
};

export default {
    getWordOfTheDay,
};
