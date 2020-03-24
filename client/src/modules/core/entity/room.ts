export class Room {

    constructor(
        id: number,
        name: string,
        background: { color: string; image: string; width: number; height: number; position: string }) {
        this.id = id;
        this.name = name;
        this.background = background;
    }

    id: number;
    name: string;
    background: {
        color: string;
        image: string;
        width: number;
        height: number;
        position: string;
    };
}
