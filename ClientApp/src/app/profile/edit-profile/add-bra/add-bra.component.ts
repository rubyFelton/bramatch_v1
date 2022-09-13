import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfileService} from "../../profile-service";
import {IProfile} from "../../../../models/profile.model";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'profile-add-bra',
  templateUrl: './add-bra.component.html',
  styleUrls: ['./add-bra.component.css']
})
export class AddBraComponent implements OnInit {
  @Input()
  profile!: IProfile;
  braForm!: UntypedFormGroup;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    let cup = new UntypedFormControl();
    let band = new UntypedFormControl();
    let make = new UntypedFormControl();
    let model = new UntypedFormControl();
    let size = new UntypedFormControl();

    this.braForm = new UntypedFormGroup({
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
