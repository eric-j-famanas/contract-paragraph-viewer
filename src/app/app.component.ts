import {Component} from '@angular/core';
import {ContractHttpService} from './http/contract-http/contract-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contract-paragraph-viewer';

  constructor(
    private readonly contractHttp: ContractHttpService,
  ) {

  }

  public testGetAllRequest() {
    this.contractHttp.getAllContracts();
  }

  public testGetIdRequest() {
    this.contractHttp.getSingleContract('1');
  }

  public testGetIdWithAllParagraphsForPage() {
    this.contractHttp.getAllParagraphsForContract('1', 1);
  }

  public testGetIdWithAllParagraphs() {
    this.contractHttp.getAllParagraphsForContract('1');
  }
}
