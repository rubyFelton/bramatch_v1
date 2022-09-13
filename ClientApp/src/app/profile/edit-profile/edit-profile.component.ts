import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileService} from "../profile-service";
import {IProfile} from "../../../models/profile.model";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input()
  profile!: IProfile;
  profileForm!: FormGroup;
  addBra:Boolean = false;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    let bust = new FormControl();
    let band = new FormControl();
    let system = new FormControl();
    let point = new FormControl();
    let about = new FormControl();

    this.profileForm = new FormGroup({
      bust: bust,
      band: band,
      system: system,
      point: point,
      about:about
    })

  }

  cancel(){
    this.router.navigate(['profile/{{profile.userID}}/home'])
  }

  saveProfile(formValues: any){
    this.profileService.saveProfile(formValues, this.profile.userID);
    this.router.navigate(['profile/{{profile.userID}}/home'])
  }

  // showAddBra(){
  //   this.addBra = true;
  // }
}
