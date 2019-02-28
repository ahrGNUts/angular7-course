// the ServersComponent was created with the CLI command
// ng generate component servers (or ng g c servers)
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
