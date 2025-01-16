import WordnikApi from "./api";

const getWordOfTheDay = async (date?: string, api = WordnikApi) => {
    const response = await api.getWordOfTheDay(date);
    const wordOfTheDayData = response.data;
    return wordOfTheDayData;
};

export default {
    getWordOfTheDay,
};
