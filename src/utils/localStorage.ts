import { WordData } from "../components/WordOfTheDay/WordOfTheDay";

export const wordInSessionlStorage = (date: string) => {
    const sessionWordData = sessionStorage.getItem("localWordData");
    if (!sessionWordData) return undefined;

    const foundWord = JSON.parse(sessionWordData).data.find(
        (word) => word.pdd === date
    );

    return foundWord;
};

export const storeWordData = (wordData: WordData) => {
    const { word, pdd, definitions, ...rest } = wordData;
    const newWordData = {
        word,
        pdd,
        definitions,
    };

    const oldData = sessionStorage.getItem("localWordData");
    if (oldData) {
        const parsedOldData = JSON.parse(oldData);
        sessionStorage.setItem(
            "localWordData",
            JSON.stringify({ data: [...parsedOldData.data, newWordData] })
        );
    } else {
        sessionStorage.setItem(
            "localWordData",
            JSON.stringify({ data: [newWordData] })
        );
    }
};
