import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.API_URL;

  constructor() { }

  login() {
    console.log(this.apiUrl + '/login');
  }
}
