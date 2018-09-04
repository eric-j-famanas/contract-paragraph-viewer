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

  // TODO: move to config
  public sum = 100; // TODO: this should mutate with each change
  public throttle = 300;
  public scrollDistance = 1;
  public scrollUpDistance = 2;
  public direction = '';

  constructor(
    // TODO: Remove after infinite scroll is sorted and async calls are made
    private readonly httpClient: ContractHttpService,
  ) {
  }

  ngOnInit() {
    this.httpClient.getAllParagraphsForContract('1').subscribe((response) => {
      this.totalContractParagraphs = response.data;
      this.displayedContractParagraphs = this.totalContractParagraphs.slice(0, this.sum);
    });
  }

  private appendItems() {
    for (let i = this.sum; i < this.sum + 20; ++i) {
      if (i > this.totalContractParagraphs.length) {
        break;
      }
      this.displayedContractParagraphs.push(this.totalContractParagraphs[i]);
    }
  }

  private prependItems() {
    for (let i = 0; i < 20; ++i) {
      this.displayedContractParagraphs.unshift();
    }
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    // TODO: This should be making an SL call
    this.appendItems();

    this.direction = 'down';
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    // TODO: this should be caching the paragraph index popped
    this.prependItems();

    this.direction = 'up';
  }
}
