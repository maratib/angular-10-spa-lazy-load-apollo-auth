import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private logger:LogService) {
    this.logger.log("AuthService initialized");
  }

  login() {
    this.logger.log('Login');
    

  }

  logout() {
    this.logger.log('Logout');
  }

  
}
