import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import routesConfig from '../../config/routes';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('menu', { static: false }) menuRef!: ElementRef;
    public routes = { ...routesConfig }; //router config to set path for page
    constructor() {}

    ngOnInit(): void {}
    ngAfterViewInit(): void {}
    public toggleMenuMobile() {
        if (this.menuRef) {
            this.menuRef.nativeElement.classList.toggle('invisible');
        }
    }
}
