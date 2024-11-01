import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name : string = "kenier";
  public gender : 'male'| 'female' | 'binary' = "male";

  //i18nSelect
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'binary': 'invitarlos'
  }
  changeclient():void{
    this.name = "ana";
    this.gender = "binary";
  }

  //i18nplural

  public clients : string[] = ["carlos","luis","miguel","jose","pedro","alejandro"];
  public clientsMap = {
    '=0': 'no hay clientes',
    'one': 'hay un cliente',
    'other': 'hay # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }

  // keyvalue pipe

  public person = {
    name: "kenier",
    age: 30,
    gender: "male"
  }

  // async pipe

  public myObservableTimer = interval(2000).pipe(tap(() => console.log('tick')));

  public promiseValue: Promise<string> = new Promise( (resolve,reject) => {
  setTimeout(() => {'tenemos data'}, 2000);
  })
}
