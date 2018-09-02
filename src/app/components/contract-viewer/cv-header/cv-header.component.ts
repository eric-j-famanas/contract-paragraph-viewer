import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tr-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent {

  @Input('trContractName') contractName: string;
}
