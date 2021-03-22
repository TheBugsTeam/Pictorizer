const AvailabilityContainer = ({ chosen }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Geforce now</td>
                        {Object.keys(chosen.geforce).map((item) => (
                            // console.log(chosen.geforce[item])
                            <td style={{ width: 100 }}>
                                {chosen.geforce[item] ? "✔️" : "❌"}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AvailabilityContainer;
