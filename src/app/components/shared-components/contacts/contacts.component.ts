import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  icons: any[] = [{url: "../../../../assets/images/icons8-facebook.svg"}, {url: "../../../../assets/images/icons8-twitter.svg"}, {url: "../../../../assets/images/icons8-insta.svg"}]
}
