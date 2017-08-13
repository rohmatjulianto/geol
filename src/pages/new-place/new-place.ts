import { Component } from '@angular/core';
import { placesService } from "../../services/places.service";


@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: placesService) {
  }
  onAddPlace(value: {title: string}) {

  }

}
