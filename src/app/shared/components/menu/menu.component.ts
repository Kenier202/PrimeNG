import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = [];
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon : 'pi pi-align-left',
            routerLink: '/',


          },{
            label: 'numeros',
            icon : 'pi pi-dollar',
            routerLink: 'numbers'

          },
          {
            label: 'no cumunes',
            icon : 'pi pi-globe',
            routerLink: 'uncommon'

          },
        ]
      },
      {
        label: 'pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'otra cosa',
            icon : 'pi pi-cog',

          }
        ]
      }
    ]
  }

}
