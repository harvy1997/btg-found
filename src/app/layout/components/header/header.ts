import { Component, inject } from '@angular/core';
import { NavItems } from '../nav-items/nav-items';


@Component({
  selector: 'layout-header',
  imports: [NavItems],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}

