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
    this.contractHttp.getAllContracts().subscribe((data) => {
      console.log(data);
    });
  }

  public testGetIdRequest() {
    this.contractHttp.getSingleContract('1');
  }

  public testGetIdWithAllParagraphsForPage() {
    this.contractHttp.getAllParagraphsForContract('1', 1).subscribe((data) => {
      console.log(data);
    });
  }

  public testGetIdWithAllParagraphs() {
    this.contractHttp.getAllParagraphsForContract('1').subscribe((data) => {
      console.log(data);
    });
  }
}
