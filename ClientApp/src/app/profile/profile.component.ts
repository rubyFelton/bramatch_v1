import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./profile-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;

  constructor(private profileService:ProfileService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.profile = this.profileService.getProfile(this.route.snapshot.params["id"])
      // .subscribe(profile => this.profile)
    // this.profile = this.route.snapshot.data['profile'] when route resolver implimented
  }

}
