import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';

declare var enable : any;

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
      enable();
    
  }

}
