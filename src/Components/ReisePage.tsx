import {useState} from "react";
import type {Vacation} from "../models/reise.ts";
import VacationForm from "./ReiseForm";
import VacationDisplay from "./ReiseDisplay";

export default function ReisePage() {
    const [vacations, setVacations] = useState<Vacation[]>([]);

    const handleSave = (vacation: Vacation) => {
        setVacations((prev) => [...prev, vacation]);
    };

    const handleDelete = (id: string) => {
        setVacations((prev) => prev.filter((v) => v.id !== id));
    };

    const handleUpdate = (id: string) => {
        // Update-Funktion kann später erweitert werden
        console.log("Update:", id);
    };

    return (
        <div>
            <h1>Packliste Planner</h1>
            <VacationForm onSave={handleSave} onCancel={() => {}} />
            <VacationDisplay data={vacations} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );
}