import Tag from "./Tag";
import "../style.css";
import SteamLogo from "../images/logos/Steam.svg";
import EpicLogo from "../images/logos/EpicGames.svg";
import GogLogo from "../images/logos/Gog.com.svg";

const SideContainer = ({ game }) => {
    console.log(game);
    return (
        <div className="side-container">
            <div
                style={{
                    float: "left",
                    width: "40%",
                    display: "block",
                }}
            >
                <img className="game-img" src={game.image}></img>
                <p
                    style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {game.name}
                </p>
            </div>
            <div
                style={{
                    float: "right",
                    width: "60%",
                    display: "block",
                }}
            >
                {/* <button className="side-button">Add to my library</button>
                <br /> */}
                <a href={game.stores[0].url}>
                    <button className="side-button">Go to website</button>
                </a>
                <br />
                <div className="tag-container">
                    <p className="p-tag">
                        Publishers
                        <ul className="inline-ul">
                            {game.publishers.map((item) => (
                                <Tag text={item} />
                            ))}
                        </ul>
                    </p>
                    <p className="p-tag">
                        Genre
                        <ul>
                            {game.genres.map((item) => (
                                <Tag text={item} />
                            ))}
                        </ul>
                    </p>
                    <p className="p-tag">
                        Tags
                        <ul>
                            {game.tags.map((item) => (
                                <Tag text={item} tag="true" />
                            ))}
                        </ul>
                    </p>
                </div>
            </div>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "16px",
                    display: "block",
                    width: "100%",
                    height: "150px",
                    float: "left",
                    padding: "15px",
                }}
            >
                <p
                    style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textAlign: "left",
                    }}
                >
                    Where to buy
                </p>
                <ul
                    style={{
                        textAlign: "center",
                    }}
                >
                    {game.stores.map((item) =>
                        item.storeId == 1 ? (
                            <li className="stores-li">
                                <img className="store-img" src={SteamLogo} />
                                <p className="store-p">Steam</p>
                            </li>
                        ) : item.storeId == 5 ? (
                            <li className="stores-li">
                                <img className="store-img" src={GogLogo} />
                                <p className="store-p">Gog</p>
                            </li>
                        ) : (
                            item.storeId == 5 && (
                                <li className="stores-li">
                                    <img className="store-img" src={EpicLogo} />
                                    <p className="store-p">Epic Games</p>
                                </li>
                            )
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

// const StyledSideContainer = styled.sidecontainer``;

export default SideContainer;
