import {Injectable} from '@angular/core';
import {BaseStateProviderService} from '../base-state-provider.service';
import {IContract} from '../../models/contracts/i-contract';
import {IContractData} from '../../models/data/contracts/i-contract-data';
import {ContractHttpService} from '../../http/contract-http/contract-http.service';
import {Observable} from 'rxjs';
import {IContractParagraphsData} from '../../models/data/contracts/i-contract-paragraphs-data';

@Injectable({
  providedIn: 'root'
})
export class ContractDataService extends BaseStateProviderService<IContractData> {
  constructor(
    private readonly httpClient: ContractHttpService,
  ) {
    super();
  }

  public getParagraphsForContract(pageNumber?: number): Observable<IContractParagraphsData> | null {
    const state = this.getState();

    if (state == null) {
      return null;
    }

    if (pageNumber == null) {
      return this.httpClient.getAllParagraphsForContract(state.data.id);
    }

    return this.httpClient.getAllParagraphsForContract(state.data.id, pageNumber);
  }
}
