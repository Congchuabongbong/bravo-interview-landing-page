import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
export enum TYPE {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
    QUESTION = 'question',
}
@Injectable({
    providedIn: 'root',
})
export class SweetalertService {
    constructor() {}

    toast(
        typeIcon: TYPE = TYPE.SUCCESS,
        timerProgressBar: boolean = false,
        title: string = 'Action success!',
        timer: number = 2000,
    ) {
        Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: typeIcon,
            timerProgressBar,
            timer: timer,
            title: title,
        });
    }
}
