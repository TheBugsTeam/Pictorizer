import Tag from "./Tag";

const SideContainer = ({ chosen }) => {
    return (
        <div
            style={{
                float: "right",
                width: "40%",
                height: "80%",
                backgroundColor: "lightgray",
                border: "1px solid black",
            }}
        >
            <img></img>
            <Tag text="Hali" />
        </div>
    );
};

// const StyledSideContainer = styled.sidecontainer``;

export default SideContainer;
