import type {Vacation} from "../models/reise.ts";
import '../App.css'

type ServiceDisplayProp = {
    data: Vacation[];
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
}

export default function VacationDisplay(props: ServiceDisplayProp) {
    return (
        <div className="display-container">
            {props.data.length === 0 ? (
                <p className="no-data">Keine Reisen geplant. Erstelle eine neue!</p>
            ) : (
                <table className="vacation-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ziel</th>
                        <th>Tage</th>
                        <th>Begleitung durch Linda Wahl</th>
                        <th></th>
                        <th>Packliste</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((vacation) => (
                        <tr key={vacation.id} className="vacation-row">
                            <td className="name-cell">{vacation.name}</td>
                            <td className="destination-cell">{vacation.reiseziel}</td>
                            <td className="duration-cell">{vacation.dauer}</td>
                            <td className="items-cell">
                                <td className="name-cell">{vacation.wetter}</td>
                                <td className="name-cell">{vacation.begleitung}</td>
                                <ul className="packing-list">
                                    {vacation.packingItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="action-cell">
                                <button onClick={() => props.onDelete(vacation.id)} className="btn-delete">Löschen
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}