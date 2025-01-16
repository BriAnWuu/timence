import FactsApi from "./api";

const getRandomFact = async (api = FactsApi) => {
    const response = await api.getRandomFact();
    const randomFact = response.data.text;
    return randomFact;
};

export default { getRandomFact };
