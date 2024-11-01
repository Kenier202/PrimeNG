import { Component } from '@angular/core';

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

  public clients : string[] = ["kenier","ana","juan","maria","carlos","luis","miguel","jose","pedro","alejandro"];
  public clientsMap = {
    '=0': 'no hay clientes',
    'one': 'hay un cliente',
    'other': 'hay # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }
}
