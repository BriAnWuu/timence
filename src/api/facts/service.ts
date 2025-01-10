import FactsApi from "./api";

const getRandomFact = async ( api = FactsApi) => {
    const response = await api.getRandomFact();
    const randomFact = response.text;
    return randomFact
}


export default { getRandomFact }