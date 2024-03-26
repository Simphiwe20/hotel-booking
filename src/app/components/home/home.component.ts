import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuItems: any = [{name: 'home'}, {name: 'about'}, {name: 'service'}, {name: 'pricing'}, {name: 'blog'}, {name: 'contact'}]
}
