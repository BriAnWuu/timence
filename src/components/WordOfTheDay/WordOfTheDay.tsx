import { useEffect, useState } from "react";
import WordOfTheDayService from "../../api/wordOfTheDay/service";
import Loading from "../Loading/Loading";
import "./WordOfTheDay.scss";

interface WordData {
    [key: string]: any;
}

function WordOfTheDay({}) {
    // add current date

    const [word, setWord] = useState<WordData | null | undefined>(undefined);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        WordOfTheDayService.getWordOfTheDay()
            .then((wordData) => setWord(wordData))
            .catch(() => setHasError(true));
    }, []);

    // render  component
    if (hasError) {
        return <div>Error occurred when fetching word of the day</div>;
    }
    if (word === undefined) {
        return <Loading />;
    }
    if (word === null) {
        return <div>No words for you today</div>;
    }
    return (
        <section className="day-schedule__word-card">
            <p>{word.word}</p>
            <p>{word.definitions[0].text}</p>
        </section>
    );
}

export default WordOfTheDay;
