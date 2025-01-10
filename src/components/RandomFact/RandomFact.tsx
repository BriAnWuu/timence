import { useEffect, useState } from "react";
import FactsService from "../../api/facts/service";
import Loading from "../Loading/Loading";
import "./RandomFact.scss";

function RandomFact() {
    const [fact, setFact] = useState<String | null | undefined>(undefined);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        FactsService.getRandomFact()
            .then((randomFact) => setFact(randomFact))
            .catch(() => setHasError(true));
    }, []);

    // render  component
    if (hasError) {
        return <div>Error occurred when fetching random facts</div>;
    }
    if (fact === undefined) {
        return <Loading />;
    }
    if (fact === null || fact === "") {
        return <div>No random facts for you today</div>;
    }
    return <p className="day-schedule__random-fact">{fact}</p>;
}

export default RandomFact;
