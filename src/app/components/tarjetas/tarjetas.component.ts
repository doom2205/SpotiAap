import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent {
  @Input() item : any[]=[]
  
  constructor( private router:Router){

  }


  verArtista(item: any){
    let itemId
    if(item.type==='artist'){
      itemId=item.id
    }else{
      itemId=item.artists[0].id
    }
    console.log(itemId);
    this.router.navigate(['/artist', itemId])
  }


}
