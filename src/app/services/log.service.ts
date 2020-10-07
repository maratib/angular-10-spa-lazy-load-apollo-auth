import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    this.log("LogService initialized");

  }

  log(msg: any) {
    let now = moment().format('hh:mm:ss');
    console.log(now + ": " + JSON.stringify(msg));
  }
}
