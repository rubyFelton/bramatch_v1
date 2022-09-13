import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProfile} from "../../../models/profile.model";

@Component({
  selector: 'app-profile-sidenav',
  templateUrl: './profile-sidenav.component.html',
  styleUrls: ['./profile-sidenav.component.css']
})
export class ProfileSidenavComponent implements OnInit {

  @Input()
  profile!: IProfile;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.profile);
  }

}
