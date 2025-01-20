import Calendar from "../../components/Calendar/Calendar";
import DaySchedule from "../../components/DaySchedule/DaySchedule";
import RandomFact from "../../components/RandomFact/RandomFact";
import "./Home.scss";

function Home() {
    return (
        <main>
            <Calendar />
            <DaySchedule>
                {/* don't refetch random fact when date change */}
                <RandomFact />
            </DaySchedule>
        </main>
    );
}

export default Home;
