import '../App.css'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import type {NewVacation, Vacation} from "../models/reise.ts";
import {generatePackingItems} from "../models/reise.ts";

type VacationFormProps = {
    onSave: (vacation: Vacation) => void,
    onCancel: () => void,
}

const defaultVacation: NewVacation = {name: "", reiseziel: "Strand", dauer: 3, begleitung: false, wetter: "sonnig"};

function VacationForm(props: VacationFormProps) {
    const [vacation, setVacation] = useState<NewVacation>(defaultVacation);

    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const packingItems = generatePackingItems(vacation);

        const newVacation: Vacation = {
            id: crypto.randomUUID(),
            ...vacation,
            packingItems
        };

        props.onSave(newVacation);
        setVacation(defaultVacation);
        event.currentTarget.reset();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.type === "number" ? parseInt(event.target.value) : event.target.value;

        setVacation((prev) => {
            return {...prev, [name]: value}
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Reisename</label>
                    <input type="text" name="name" value={vacation.name} placeholder="z.B. Sommerurlaub" required
                           onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Reiseziel</label>
                    <select name="reiseziel" value={vacation.reiseziel} required onChange={handleChange}>
                        <option value="Strand">Strand</option>
                        <option value="Berge">Berge</option>
                        <option value="Zuhause">Zuhause</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Dauer (Tage)</label>
                    <input type="number" name="dauer" value={vacation.dauer} min="1" required onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Begleitung (Linda)</label>
                    <input type="checkbox" name="begleitung" value={vacation.begleitung} min="1"
                           onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Wetter</label>
                    <select name="wetter" id="beidi" value={vacation.wetter} required onChange={handleChange}>
                        <option value="sonnig">sonnic</option>
                        <option value="regnerisch">Regenerisch</option>
                        <option value="betrügerisch">Nicht gut</option>
                        <option value="Nachtisch">Mondlicht</option>
                    </select>

                </div>

                <button type="submit" className="btn-submit">Reise planen</button>
            </form>
        </>
    )
}

export default VacationForm