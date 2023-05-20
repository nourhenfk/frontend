import { navEmployee } from './_navEmp';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, Inject, Injectable } from '@angular/core';

import { navItems } from './_nav';
import {navItemsUser} from './_userNav'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private authService: AuthServiceService) {
    if (this.authService.isAdmin()) {
      this.navItems = navItems
    }else if(this.authService.isEmployee()){
      this.navItems=navEmployee
    }
    else {
      this.navItems = navItemsUser
    }
  }
}
