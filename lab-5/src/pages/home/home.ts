import { Component } from '@angular/core';
import {  Platform } from 'ionic-angular';

import {Geolocation} from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  lat: any;
  long: any;


  constructor(public platform: Platform,
              public geolocation: Geolocation) {

  }
  submit()
  {
    this.geolocation.getCurrentPosition().then(pos => {
      this.long = pos.coords.longitude;
      this.lat = pos.coords.latitude;
    })
  }
}



