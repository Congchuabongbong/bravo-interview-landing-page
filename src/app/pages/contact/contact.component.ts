//**import from libraries*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
//**import from sources*/
import { SweetalertService, TYPE } from 'src/app/services/sweetalert.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    //** Properties declared start here:
    protected submitted = false;
    //** Constructor start here!
    constructor(private formBuilder: FormBuilder, private swal: SweetalertService) {}
    //** Generate contact form group using form builder here:
    protected contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        desc: ['', [Validators.required, Validators.maxLength(250)]],
    });
    //** Getter
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

    //** Lifecycle hooks here
    ngOnInit(): void {}

    //** Event Binding here:
    public onSubmit() {
        this.submitted = true;
        //If contactForm invalid prevent submit!
        if (this.contactForm.invalid) {
            return;
        }
        //DO something when form success here!...
        console.log(this.contactForm.value);
        this.swal.toast(TYPE.SUCCESS, false, 'Submit success!', 2000); // alert success when form valid  here!
        //Reset form when submit success!
        this.submitted = false;
        this.contactForm.reset();
    }
}
