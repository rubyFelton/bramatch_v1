import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent} from "./profile.component";
import { EditProfileComponent} from "./edit-profile/edit-profile.component";
import { ProfileHomeComponent} from "./profile-home/profile-home.component";
import { ProfileSidenavComponent } from './profile-sidenav/profile-sidenav.component';

import { RouterModule, Routes} from '@angular/router';
import { ProfileService} from './profile-service';


import { ReactiveFormsModule} from "@angular/forms";
import { BraListComponent } from './bra-list/bra-list.component';
import { AddBraComponent } from './edit-profile/add-bra/add-bra.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: 'profile/:id', component: ProfileComponent,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'edit', component: EditProfileComponent},
      { path: 'add-bra', component: AddBraComponent},
      { path: 'home', component: ProfileHomeComponent},

      // { path: 'bras/:id'},
      // { path: 'bras/:id/edit'}
    ]
  },
];

const components = [ProfileComponent, EditProfileComponent, ProfileHomeComponent, ProfileSidenavComponent, BraListComponent];

@NgModule({
  declarations: [
    components,
    AddBraComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    components, RouterModule
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
