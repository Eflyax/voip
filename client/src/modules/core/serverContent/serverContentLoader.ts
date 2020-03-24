import {Injectable} from '@angular/core';
import {Room} from '../entity/room';

@Injectable({
    providedIn: 'root',
})
export class ServerContentLoader {

    getRoomList() {
        type Rooms = Array<Room>;
        var roomList: Rooms = [
            {
                'id': 0,
                'name': 'Čekárna',
                'background': {
                    'color': '',
                    'image': '/assets/img/waiting.png',
                    'width': 100,
                    'height': 30,
                    'position': 'right'
                }
            },
            {
                'id': 1,
                'name': 'La case de papel',
                'background': {
                    'color': '',
                    'image': '',
                    'width': 100,
                    'height': 30,
                    'position': 'right'
                }
            },
            {
                'id': 2,
                'name': 'Extatusova kavárna!',
                'background': {
                    'color': '',
                    'image': '/assets/img/coffee.jpeg',
                    'width': 150,
                    'height': 70,
                    'position': 'right'
                }
            },
            {
                'id': 3,
                'name': 'Žádný olomócký toaster nekappal na rožok',
                'background': {
                    'color': '',
                    'image': '',
                    'width': 100,
                    'height': 30,
                    'position': 'right'
                }
            },
        ];

        return roomList;
    }

}
