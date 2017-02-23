import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { LoginRequest } from '../models/loginRequest';


@Component({
    selector: 'my-login',
    templateUrl: './login.html'
})

export class LoginComponent {

    @ViewChild('username') usrName: ElementRef;
    @ViewChild('password') usrPassword: ElementRef;

    errorMessage: string;
    response: Response;

    constructor(private router: Router) {
        //Clear the localStorage
        if (null != localStorage.getItem('userName')) {
            localStorage.removeItem('userName');
            console.log('SList: Cleared local storage item');
        }
    }

    /**
     * Method to validate the login (only if username and password are Polymer elements)
     */
    validateLogin(event: Event) {
        let usr: LoginRequest = new LoginRequest();
        usr.userName = this.usrName.nativeElement.inputValue;
        usr.password = this.usrPassword.nativeElement.inputValue;
        console.log('Logged in as: ' + usr.userName);
        console.log(event);

        if (null != usr.userName && null != usr.password) {
            //this.checkCredentials(usr);
            console.log('SList: Login successful');
            localStorage.setItem('userName', usr.userName);
            this.router.navigate(['/slist/home']);
        } else {
            
        }
    }

    /*
     *  (DEPRECATED)
     *  Method to validate the login credentials (only if the username and password elements are of native HTML) 
     */
    validateCredentials(name: string, pass: string) {

        /* if (null != localStorage.getItem('userName')) {
            localStorage.removeItem('userName');
            console.log('SList: Cleared local storage item');
        } */

        localStorage.setItem('userName', name);
        console.log('UserName: ', localStorage.getItem('userName'));


        let loginRequest = new LoginRequest();
        loginRequest.userName = name;
        loginRequest.password = pass;
        /*this.communicatorService.handleService(loginRequest, 'input your url', 'POST').subscribe(
            response => {
                if (response.ok) {
                    console.log('SList: Login successful');
                    this.router.navigate(['/slist/home']);
                }

                else {
                    this.router.navigate(['/slist/login']);
                }
            },
            error => {
                this.errorMessage = <any>error;
            }
        );*/
    }
}
