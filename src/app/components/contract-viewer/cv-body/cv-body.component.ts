import {Component, Input, OnInit} from '@angular/core';
import {IContractData} from '../../../models/data/contracts/i-contract-data';
import {ContractHttpService} from '../../../http/contract-http/contract-http.service';
import {IContractParagraph} from '../../../models/contracts/i-contract-paragraph';

@Component({
  selector: 'app-tr-cv-body',
  templateUrl: './cv-body.component.html',
  styleUrls: ['./cv-body.component.css']
})
export class CvBodyComponent implements OnInit {

  @Input('trContractData') contract: IContractData;

  public totalContractParagraphs: IContractParagraph[];
  public displayedContractParagraphs: IContractParagraph[];

  constructor(
    // TODO: Remove after infinite scroll is sorted and async calls are made
    private readonly httpClient: ContractHttpService,
  ) {
  }

  ngOnInit() {
    this.httpClient.getAllParagraphsForContract('1').subscribe((response) => {
      this.totalContractParagraphs = response.data;
      this.displayedContractParagraphs = this.totalContractParagraphs.slice(0, 20);
    });
  }

}
