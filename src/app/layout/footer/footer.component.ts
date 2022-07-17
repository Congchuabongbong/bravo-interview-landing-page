import { Component, OnInit } from '@angular/core';
import routesConfig from '../../config/routes';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
    public routes = { ...routesConfig }; //router config to set path for page
    constructor() {}

    ngOnInit(): void {}
}
