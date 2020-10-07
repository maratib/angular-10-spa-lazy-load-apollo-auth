import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  users$: Observable<any>;

  constructor(private logger: LogService) { }

  ngOnInit(): void {
    this.logger.log('About Page initialized ');
  }
    
}
