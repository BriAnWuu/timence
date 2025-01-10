import FactsApi from "./api";

async function getRandomFact( api = FactsApi) {
    const response = await api.getRandomFact();
    const randomFact = response.text;
    return randomFact
}


export default { getRandomFact }