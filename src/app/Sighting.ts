export class Sighting {
    constructor(sightingId: number, date: Date, description: string, lat: number, long: number) {
        this.sightingId = sightingId;
        this.date = date;
        this.description = description;
        this.lat = lat;
        this.long = long;
    }

    sightingId: number;
    date: Date;
    description: string;
    lat: number;
    long: number;
}
