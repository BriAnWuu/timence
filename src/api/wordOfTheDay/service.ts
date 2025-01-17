import WordnikApi from "./api";

const getWordOfTheDay = async (date?: string, api = WordnikApi) => {
    const response = await api.getWordOfTheDay(date);

    if (response.status === 204) return null;

    const wordOfTheDayData = response.data;
    return wordOfTheDayData;
};

export default {
    getWordOfTheDay,
};
