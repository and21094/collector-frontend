import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector',
  template: `
            <app-nav></app-nav>
            <div class="container">
              <router-outlet></router-outlet>
             </div>`,
  styles: []
})
export class CollectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
