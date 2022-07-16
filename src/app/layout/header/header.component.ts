import { Component, OnInit, ElementRef } from '@angular/core';
import routesConfig from '../../config/routes';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    public routes = { ...routesConfig };
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}

    public toggleMenuMobile() {
        this.elementRef.nativeElement.querySelector('#menu').classList.toggle('invisible');
    }
}
