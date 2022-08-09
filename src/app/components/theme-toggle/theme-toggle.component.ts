import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent implements OnInit {
    @ViewChild('inputToggle', { static: false, read: ElementRef }) inputToggleRef!: ElementRef;
    private currentTheme!: any;
    constructor(private renderer: Renderer2, private localStorageService: LocalStorageService) {}
    ngOnInit(): void {
        this.currentTheme = this.localStorageService.getItem('theme');
    }
    ngAfterViewInit(): void {
        if (this.currentTheme) {
            this.renderer.addClass(document.documentElement, this.currentTheme);
            if (this.currentTheme === 'dark') {
                console.log('dark');
                this.inputToggleRef.nativeElement.checked = true;
            }
        }
    }
    public switchTheme(e: any) {
        if (e.target.checked) {
            this.renderer.addClass(document.documentElement, 'dark');
            this.renderer.removeClass(document.documentElement, 'light');
            this.localStorageService.setItem('theme', 'dark');
        } else {
            this.renderer.addClass(document.documentElement, 'light');
            this.renderer.removeClass(document.documentElement, 'dark');
            this.localStorageService.setItem('theme', 'light');
        }
    }
}
