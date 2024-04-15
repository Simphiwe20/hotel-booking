import { Component } from '@angular/core';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.scss']
})
export class PartTwoComponent {

  rooms: any;

  constructor() {
    this.rooms = [{ type: 'Deluxe Double Room', consist: '38m2/2 beds/ 1 bathrooms', cost: 'From R300/night', img: '../../../assets/images/images/card-img.jpg' },
    { type: 'Double Room', consist: '38m2/2 beds/1 bathrooms', cost: 'From R400/night', img: '../../../assets/images/images/card-img3.jpg' },
    { type: 'Superior Room', consist: '50m2/3 beds/2 bathrooms', cost: 'From R600/night', img: '../../../assets/images/images/card-img2.jpg' }]
  }


}
