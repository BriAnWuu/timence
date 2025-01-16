import RandomFact from "../RandomFact/RandomFact";
import WordOfTheDay from "../WordOfTheDay/WordOfTheDay";
import "./DaySchedule.scss";

function DaySchedule({}) {
    return (
        <div className="day-schedule">
            <RandomFact />
            <WordOfTheDay />
        </div>
    );
}

export default DaySchedule;
