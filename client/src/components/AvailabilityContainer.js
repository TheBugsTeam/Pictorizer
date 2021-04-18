const AvailabilityContainer = ({ game }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Geforce now</td>
                        {Object.keys(game.geforce).map((item) => (
                            // console.log(chosen.geforce[item])
                            <td style={{ width: 100 }}>
                                {game.geforce[item] ? "✔️" : "❌"}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AvailabilityContainer;
