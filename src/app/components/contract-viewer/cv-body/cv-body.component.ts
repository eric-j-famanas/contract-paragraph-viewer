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

  public sum = 100;
  public throttle = 300;
  public scrollDistance = 1;
  public scrollUpDistance = 2;
  public direction = '';

  public isLoading = false;

  constructor(
    private readonly httpClient: ContractHttpService,
  ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.httpClient.getAllParagraphsForContract('"dc89ff49-8449-11e7-ac1d-3c52820efd20"').subscribe((response) => {
      this.totalContractParagraphs = response.data;
      this.displayedContractParagraphs = this.totalContractParagraphs.slice(0, this.sum);
      this.isLoading = false;
    });
  }

  // As you scroll down, the items should add 20 from the "service layer"
  private appendItems() {
    // TODO: Instead of calling a local function, this should be making a RESTApi call instead
    // TODO: returning the next 20 items
    for (let i = this.sum; i < this.sum + 20; ++i) {
      if (i > this.totalContractParagraphs.length) {
        break;
      }
      this.displayedContractParagraphs.push(this.totalContractParagraphs[i]);
    }

    this.sum += 20;
  }

  // As you scroll up, the recently added items should be destroyed
  private prependItems() {
    for (let i = 0; i < 20; ++i) {
      this.displayedContractParagraphs.unshift();
    }
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);

    // Hax to mock latency
    setTimeout(() => {
      this.appendItems();
    }, 1000);

    this.direction = 'down';
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    // TODO: this should be caching the paragraph index popped
    this.prependItems();

    this.direction = 'up';
  }
}
