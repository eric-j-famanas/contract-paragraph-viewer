import {Component, OnInit} from '@angular/core';
import {BaseStateService} from '../../state-providers/base-state.service';
import {IContractData} from '../../models/data/contracts/i-contract-data';
import {ContractHttpService} from '../../http/contract-http/contract-http.service';

@Component({
  selector: 'app-tr-contract-viewer',
  templateUrl: './contract-viewer.component.html',
  styleUrls: ['./contract-viewer.component.css']
})
export class ContractViewerComponent implements OnInit {

  public contractName: string;

  constructor(
    private readonly httpService: ContractHttpService,
    private readonly stateProvider: BaseStateService<IContractData>,
  ) {
  }

  ngOnInit() {
    // TODO: This should observe the selection from a menu, perform the request, and set the state
    this.httpService.getSingleContract('1').subscribe((data) => {
      this.stateProvider.setState(data);
    });

    this.stateProvider.subscribeToState((state: IContractData) => {
      if (state != null) {
        this.contractName = state.data.attributes.name;
      }
    });
  }

}
