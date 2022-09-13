import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {IProfile} from "../../models/profile.model";
import {IBra} from "../../models/bra.model";

@Injectable()
export class ProfileService{

  getProfile(id: string){
    return PROFILES.find(profile => profile.userID === id);
  }

  getByName(username: string){
    return PROFILES.find(profile => profile.username === username);
  }

  saveProfile(formValues:any, userID:string){
    let profile = PROFILES.find(profile => profile.userID === userID);
    // @ts-ignore
    profile.band = formValues.band;
    // @ts-ignore
    profile.about = formValues.about;
    // @ts-ignore
    profile.bust = formValues.bust;
    // @ts-ignore
    profile.system = formValues.system;
    // @ts-ignore
    profile.point = formValues.point;

  }

  saveBra(formValues:any, userID:string) {
    let profile = PROFILES.find(profile => profile.userID === userID);
    let bra: IBra;
    let size: string;

    if(formValues.size != ''){
      size = formValues.size;
    }else{
      size = formValues.band + formValues.cup;
    }

    bra = {
      id: 5,
      make: formValues.make,
      model: formValues.model,
      "size": size,
      styleTags: [""]
    };

    // @ts-ignore
    profile.bras.push(bra);
  }

  // when using resolver
  // getProfile(id: number){
  //   let subject = new Subject()
  //     setTimeout(()=> {subject.next(PROFILES.find(profile => profile.id === id)); subject.complete()}, 100)
  //   return subject;
  // }
}

const PROFILES: IProfile[] = [
  {
    userID: "1",
    username: 'ruby',
    about: 'some stuff about me',
    band: 36,
    bust: 45,
    point: 15,
    system: 'in',
    reduction: false,
    binding: false,
    breastfeeding: false,
    implants: true,
    implantType: "sub-muscle gummy bear",
    weightLoss: true,
    bras: [
      {
        id: 23,
        make: 'parfett',
        model: 'jennie',
        size: '36G',
        styleTags: ["plunge"]
      },
      {
        id: 54,
        make: 'victoria secret',
        model: 'angel',
        size: '36G',
        styleTags: ["tshirt"]
      }
    ]
  },
  {
    userID: "2",
    username: 'tuesday',
    about: 'stuff',
    band: 32,
    bust: 40,
    point: 17,
    system: 'cm',
    reduction: true,
    binding: false,
    breastfeeding: false,
    implants: false,
    implantType: "none",
    weightLoss: false,
    bras: [
      {
        id: 23,
        make: 'parfett',
        model: 'jennie',
        size: '36G',
        styleTags: ["plunge"]
      }
    ]
  }
]
