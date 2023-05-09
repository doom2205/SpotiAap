import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/service/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  constructor(private router:ActivatedRoute,
              private _spotify:SpotifyService){
      this.router.params.subscribe(data=>{
        console.log(data);
      })
  }

}
