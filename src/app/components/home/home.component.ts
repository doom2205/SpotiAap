import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  cancionesNuevas :any []=[]
  constructor(private _spotify: SpotifyService ){
    this._spotify.getNewRealese()
     .subscribe((data:any)=>{
       console.log(data)
       this.cancionesNuevas=data
     })
  }

}
