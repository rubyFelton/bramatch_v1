import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfileService} from "../../profile-service";
import {IProfile} from "../../../../models/profile.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'profile-add-bra',
  templateUrl: './add-bra.component.html',
  styleUrls: ['./add-bra.component.css']
})
export class AddBraComponent implements OnInit {
  @Input()
  profile!: IProfile;
  braForm!: FormGroup;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    let cup = new FormControl();
    let band = new FormControl();
    let make = new FormControl();
    let model = new FormControl();
    let size = new FormControl();

    this.braForm = new FormGroup({
      cup: cup,
      band: band,
      make: make,
      model: model,
      size: size
    })

  }

  cancel(){
    this.router.navigate(['profile/{{profile.userID}}/home'])
  }

  saveBra(formValues: any){
    this.profileService.saveBra(formValues, this.profile.userID);
    this.router.navigate(['profile/{{profile.userID}}/home'])
  }
}
