import { Component, OnInit } from '@angular/core';
import { SNOMED_API_RESPONSE } from '../../domains/SNOMED_API_RESPONSE';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {
  calls: SNOMED_API_RESPONSE[] = [];
  constructor() { }

  ngOnInit() {
  }

}