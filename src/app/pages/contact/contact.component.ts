import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SweetalertService, TYPE } from 'src/app/services/sweetalert.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    //**TODO Properties declared here:
    protected submitted = false;
    //**TODO Constructor here!
    constructor(private formBuilder: FormBuilder, private swal: SweetalertService) {}
    //**TODO Generate contact form group here
    protected contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        desc: ['', [Validators.required, Validators.maxLength(250)]],
    });
    //**TODO Getter
    public get name() {
        return this.contactForm.get('name');
    }

    public get email() {
        return this.contactForm.get('email');
    }
    public get subject() {
        return this.contactForm.get('subject');
    }
    public get desc() {
        return this.contactForm.get('desc');
    }

    public get contactF(): { [key: string]: AbstractControl } {
        return this.contactForm.controls;
    }

    //**TODO Lifecycle hooks here
    ngOnInit(): void {}

    //**TODO Event Binding here:
    public onSubmit() {
        this.submitted = true;
        //**If contactForm invalid prevent submit!
        if (this.contactForm.invalid) {
            return;
        }
        //**DO something when form success here!... */
        //** call service sweet alert toast here!
        this.swal.toast(TYPE.SUCCESS, false, 'Submit success!', 2000);
        //** reset form when submit success!
        console.log(this.contactForm.value);

        this.submitted = false;
        this.contactForm.reset();
    }
}
