import {User} from "./user";

export class Room {

    constructor(
        id: number,
        name: string,
        background: { color: string; image: string; width: number; height: number; position: string },
        users: User[]
    ) {
        this.id = id;
        this.name = name;
        this.background = background;
        this.users = users;
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
    users: User[];
}
