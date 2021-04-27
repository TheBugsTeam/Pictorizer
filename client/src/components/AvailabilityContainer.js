import "../style.css";
import GeforceLogo from "../images/logos/GeforceNow.svg";
import SteamLogo from "../images/logos/Steam.svg";
import EpicLogo from "../images/logos/EpicGames.svg";
import GogLogo from "../images/logos/Gog.com.svg";
import UbisoftLogo from "../images/logos/Ubisoft.svg";
import BethesdaLogo from "../images/logos/Bethesda.svg";
import CheckMark from "../images/logos/check-circle-regular 2.svg";
import StadiaLogo from "../images/logos/Stadia.svg";
const AvailabilityContainer = ({ game }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>
                            <img src={SteamLogo} />
                        </th>
                        <th>
                            <img src={EpicLogo} />
                        </th>
                        <th>
                            <img src={GogLogo} />
                        </th>
                        <th>
                            <img src={UbisoftLogo} />
                        </th>
                        <th>
                            <img src={BethesdaLogo} />
                        </th>
                    </tr>
                    <tr className="table-card">
                        <td>
                            <img style={{ width: "100%" }} src={GeforceLogo} />
                        </td>
                        {Object.keys(game.geforce).map((item) => (
                            // console.log(chosen.geforce[item])
                            <td style={{ width: 100, fontSize: "35px" }}>
                                {game.geforce[item] && (
                                    <img
                                        style={{ width: "20%" }}
                                        src={CheckMark}
                                    />
                                )}
                            </td>
                        ))}
                    </tr>
                    <br />
                    <br />
                    <tr className="table-card">
                        <td>
                            <img style={{ width: "60%" }} src={StadiaLogo} />
                        </td>
                        <td>
                            {game.stadia && (
                                <img style={{ width: "20%" }} src={CheckMark} />
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AvailabilityContainer;
