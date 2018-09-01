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

  public testApiRequest() {
    this.contractHttp.getAllContracts();
  }
}
