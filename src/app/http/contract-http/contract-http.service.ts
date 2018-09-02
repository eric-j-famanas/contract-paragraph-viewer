import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContractData} from '../../models/data/contracts/i-contract-data';
import {IContractParagraphsData} from '../../models/data/contracts/i-contract-paragraphs-data';
import {ContractEndpointBuilderService} from './contract-endpoint-builder.service';

@Injectable({
  providedIn: 'root' // TODO: remove when this service instantiation is moved
})
export class ContractHttpService {

  constructor(
    private readonly http: HttpClient,
    private readonly endpointBuilder: ContractEndpointBuilderService
  ) {
  }

  /**
   * Returns an observable response for all contracts in the database
   */
  // TODO: Error handling
  public getAllContracts(): Observable<IContractData[]> {
    return this.http.get<IContractData[]>(`${this.endpointBuilder.getAllContracts()}`);
  }

  /**
   * Returns one contract based on the string guid
   *
   * @param id
   */
  // TODO: Error handling
  public getSingleContract(id: string): Observable<IContractData> {
    return this.http.get<IContractData>(`${this.endpointBuilder.getContractIdEndpoint(id)}`);
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

  private getParagraphsWithNoPageNumber(id: string): Observable<IContractParagraphsData> {
    return this.http.get<IContractParagraphsData>(this.endpointBuilder.getParagraphsNoPagesEndpoint(id));
  }

  private getParagraphsForPageNumber(id: string, pageNumber: number): Observable<IContractParagraphsData> {
    return this.http.get<IContractParagraphsData>(this.endpointBuilder.getParagraphsWithPagesEndpoint(id, pageNumber));
  }
}
