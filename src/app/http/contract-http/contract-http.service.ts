import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContractDataWrapper} from '../../models/data/i-contract-data-wrapper';
import {IContractParagraphsDataWrapper} from '../../models/data/i-contract-paragraphs-data-wrapper';
import {ContractEndpointerBuilderService} from './contract-endpointer-builder.service';

@Injectable({
  providedIn: 'root' // TODO: remove when this service instantiation is moved
})
export class ContractHttpService {

  constructor(
    private readonly http: HttpClient,
    private readonly endpointBuilder: ContractEndpointerBuilderService
  ) {
  }

  private serverUri = 'http://localhost:3000/contracts';


  /**
   * Returns an observable response for all contracts in the database
   */
  // TODO: Error handling
  public getAllContracts(): Observable<IContractDataWrapper> {
    return this.http.get<IContractDataWrapper>(`${this.serverUri}`);
  }

  /**
   * Returns one contract based on the string guid
   *
   * @param id
   */
  // TODO: Error handling
  public getSingleContract(id: string) {
    return this.http.get(`${this.endpointBuilder.getContractIdEndpoint(id)}`).subscribe((response) => {
      console.log(response);
    });
  }

  /**
   * Returns all paragraphs for a specific contract. Page number specification
   * is optional
   *
   * @param id
   * @param pageNumber
   */
  public getAllParagraphsForContract(id: string, pageNumber?: number) {
    return pageNumber == null ? this.getParagraphsWithNoPageNumber(id) : this.getParagraphsForPageNumber(id, pageNumber);
  }

  private getParagraphsWithNoPageNumber(id: string): Observable<IContractParagraphsDataWrapper> {
    return this.http.get<IContractParagraphsDataWrapper>(this.endpointBuilder.getParagraphsNoPagesEndpoint(id));
  }

  private getParagraphsForPageNumber(id: string, pageNumber: number): Observable<IContractParagraphsDataWrapper> {
    return this.http.get<IContractParagraphsDataWrapper>(this.endpointBuilder.getParagraphsWithPagesEndpoint(id, pageNumber));
  }
}
