import {Injectable} from '@angular/core';
import {BaseStateService} from '../base-state.service';
import {IContractData} from '../../models/data/contracts/i-contract-data';
import {ContractHttpService} from '../../http/contract-http/contract-http.service';
import {Observable} from 'rxjs';
import {IContractParagraphsData} from '../../models/data/contracts/i-contract-paragraphs-data';
import {BaseVirtualizedScrollStateService} from '../base-virtualized-scroll-state.service';

@Injectable({
  providedIn: 'root'
})
export class ContractDataStateService extends BaseVirtualizedScrollStateService<IContractData> {
  constructor(
    private readonly httpClient: ContractHttpService,
  ) {
    super();
  }

  /**
   * This will return all paragraphs for the current contract that is loaded
   * as the present state in the observable stream
   *
   * @param pageNumber
   */
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
