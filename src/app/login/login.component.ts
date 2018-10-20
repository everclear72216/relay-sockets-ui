import { Component } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [SessionService]
})
export class LoginComponent {

    private session: SessionService;

    constructor(session: SessionService) {
        this.session = session;
    }

    private login() {
        this.session.login("lull", "lall");
    }
}
