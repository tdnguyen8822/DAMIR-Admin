import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isNavbarCollapsed = true;
  userName: string = 'Nguyen, Tam D';

  constructor() { }

  ngOnInit() {
  }

}
