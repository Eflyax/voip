import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'registration-form',
    templateUrl: './registrationForm.html',
    styleUrls: ['./registrationForm.css']
})

// const MIN_PASSWORD_LENGTH = 6;

export class RegistrationFormComponent implements OnInit {


    items;
    registrationForm;

    constructor(
        // private formBuilder: FormBuilder
    ) {
        // this.registrationForm = new FormGroup({
        //     email: new FormControl(''),
        //     passwords: new FormGroup({
        //         password: new FormControl('', this.passwordIsShort),
        //         passwordAgain: new FormControl(''),
        //     }, {validators: this.checkPasswords}),
        // });

    }

    ngOnInit() {
        this.items = [];
    }

    onSubmit(data) {
        console.log(data);
        // this.registrationForm.reset();
        // console.warn('Your order has been submitted', customerData);
    }

    // passwordIsShort(input) {
    //     if (input.value.length < 6) {
    //         return {invalid: true};
    //     }
    //
    //     return false;
    // }

    // checkPasswords(group: FormGroup) {
    //
    //     const password = group.get('password').value;
    //     const passwordAgain = group.get('passwordAgain').value;
    //
    //     if (password.lenght < 6) {
    //         return {invalid: true}
    //     } else {
    //         return {invalid: false}
    //     }
    //     if (password !== passwordAgain) {
    //         return {passwordNotMatch: true};
    //     }
    //
    //     return true;
    // }

}
