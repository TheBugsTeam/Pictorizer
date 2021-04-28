import AvailabilityContainer from "./AvailabilityContainer";

const MainContainer = ({ game }) => {
    return (
        <div className="main-container">
            <AvailabilityContainer game={game} />
        </div>
    );
};

export default MainContainer;
