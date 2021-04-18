import AvailabilityContainer from "./AvailabilityContainer";

const MainContainer = ({ game }) => {
    return (
        <div
            style={{
                float: "left",
                width: "60%",
                height: "80%",
                backgroundColor: "lightgray",
            }}
        >
            <AvailabilityContainer game={game} />
            <h1>valami</h1>
        </div>
    );
};

export default MainContainer;
