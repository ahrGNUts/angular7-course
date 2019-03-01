// the ServersComponent was created with the CLI command
// ng generate component servers (or ng g c servers)
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
     }, 2000);
  }

  ngOnInit() {
  }

}
