import {Component, Input, OnInit} from '@angular/core';
import {IContractData} from '../../../models/data/contracts/i-contract-data';

@Component({
  selector: 'app-tr-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent {

  @Input('trContractData') contract: IContractData;
}
