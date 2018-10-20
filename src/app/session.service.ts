import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    constructor() { }

    public login(username: string, password: string) {
        console.debug(username + ' ' + password);
    }
}
