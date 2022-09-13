import {Component, Input, OnInit} from '@angular/core';
import {IBra} from "../../../models/bra.model";

@Component({
  selector: 'profile-bra-list',
  templateUrl: './bra-list.component.html',
  styleUrls: ['./bra-list.component.css']
})
export class BraListComponent implements OnInit {

  @Input()
  bras: IBra[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
