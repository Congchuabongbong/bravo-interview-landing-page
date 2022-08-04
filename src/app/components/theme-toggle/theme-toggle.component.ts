import { Component, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  public switchTheme(e: any) {
    if (e.target.checked) {
        this.renderer.addClass(document.documentElement, 'dark');
        this.renderer.removeClass(document.documentElement, 'light');
        // localStorage.setItem('theme', 'dark');
    } else {
        this.renderer.addClass(document.documentElement, 'light');
        this.renderer.removeClass(document.documentElement, 'dark');
        // this.elementRef.nativeElement.documentElement.setAttribute('class', 'light');
        // localStorage.setItem('theme', 'light');
    }
}
}
