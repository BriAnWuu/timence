import { useEffect, useState } from "react";
import WordOfTheDayService from "../../api/wordOfTheDay/service";
import Loading from "../Loading/Loading";
import "./WordOfTheDay.scss";

interface WordData {
    [key: string]: any;
    definitions: WordData[];
}

interface WordOfTheDayProps {
    currentDate: string;
}

// use testing date with multi definition
function WordOfTheDay({ currentDate = "2024-09-30" }: WordOfTheDayProps) {
    const [word, setWord] = useState<WordData | null | undefined>(undefined);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        WordOfTheDayService.getWordOfTheDay(currentDate)
            .then((wordData) => setWord(wordData))
            .catch(() => setHasError(true));
    }, []);

    // render  component
    if (hasError) {
        return (
            <div className="day-schedule__word-card">
                Error occurred when fetching word of the day
            </div>
        );
    }
    if (word === undefined) {
        return <Loading />;
    }
    if (word === null) {
        return (
            <div className="day-schedule__word-card">
                No words for you today
            </div>
        );
    }
    return (
        <div className="day-schedule__word-card">
            <div>
                <p>{word.word}</p>
            </div>
            <ul>
                {word.definitions.map((def, idx) => (
                    <li key={def.text} className="day-schedule__definitions">
                        {word.definitions.length > 1 && <span>{idx + 1}.</span>}
                        <p className="day-schedule__part-of-speech">
                            {def.partOfSpeech}
                        </p>
                        <p>{def.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WordOfTheDay;
