export type Vacation = {
    id: string,
    name: string,
    reiseziel: string,
    dauer: number,
    begleitung: boolean,
    packingItems: string[],
    wetter: string;
}

export type NewVacation = Omit<Vacation, "id" | "packingItems">;

export function generatePackingItems(vacation: NewVacation): string[] {
    const items: string[] = [];

    // Basis-Items für alle Reisen
    items.push("Reisepass/Ausweis");
    items.push("Zahnbürste & Zahnpasta");
    items.push("Toilettetasche");
    items.push("Medikamente");
    items.push("Ladekabel");

    // Reiseziel-basiert
    if (vacation.reiseziel === "Strand") {
        items.push("Badeanzug/Badehose");
        items.push("Strandtuch");
        items.push("Flip-Flops");
        items.push("Sonnencreme");
        items.push("Sonnenbrille");
    } else if (vacation.reiseziel === "Berge") {
        items.push("Wanderschuhe");
        items.push("Rucksack");
        items.push("Wandersocken");
        items.push("Warme Jacke");
        items.push("Trinkflasche");
    } else if (vacation.reiseziel === "Zuhause") {
        items.push("Bequeme Kleidung");
    }

    // Dauer-basiert (wie viel Kleidung man braucht)
    const outfitCount = Math.ceil(vacation.dauer / 2);
    if (vacation.dauer >= 1) {
        items.push(`${outfitCount} komplette Outfits`);
    }
    if (vacation.dauer >= 5) {
        items.push("Wäschebeutel");
    }
    if (vacation.dauer >= 7) {
        items.push("Extra Schuhe");
    }

    return items;
}