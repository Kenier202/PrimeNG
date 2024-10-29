import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {
  public nameLower: string = "kenier";
  public nameUpper: string = "KENIER";
  public fullName: string = "KeNiEr moRaLes";

}
