import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContractData} from '../../models/data/contracts/i-contract-data';
import {IContractParagraphsData} from '../../models/data/contracts/i-contract-paragraphs-data';
import {ContractEndpointBuilderService} from './contract-endpoint-builder.service';
import {BaseHttpService} from '../base-http.service';

@Injectable({
  providedIn: 'root' // TODO: remove when this service instantiation is moved
})
export class ContractHttpService extends BaseHttpService {

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly endpointBuilder: ContractEndpointBuilderService
  ) {
    super(
      httpClient,
      endpointBuilder
    );
  }

  /**
   * Returns an observable response for all contracts in the database
   */
  // TODO: Error handling
  public getAllContracts(): Observable<IContractData[]> {
    return this.httpClient.get<IContractData[]>(`${this.endpointBuilder.getAllContracts()}`);
  }

  /**
   * Returns one contract based on the string guid
   *
   * @param id
   */
  // TODO: Error handling
  public getSingleContract(id: string): Observable<IContractData> {
    return this.httpClient.get<IContractData>(`${this.endpointBuilder.getContractIdEndpoint(id)}`);
  }

  /**
   * Returns all paragraphs for a specific contract. Page number specification
   * is optional
   *
   * @param id
   * @param pageNumber
   */
  // TODO: Error handling
  public getAllParagraphsForContract(id: string, pageNumber?: number): Observable<IContractParagraphsData> {
    return pageNumber == null ? this.getParagraphsWithNoPageNumber(id) : this.getParagraphsForPageNumber(id, pageNumber);
  }

  private getParagraphsWithNoPageNumber(id: string): Observable<IContractParagraphsData> {
    return this.httpClient.get<IContractParagraphsData>(this.endpointBuilder.getParagraphsNoPagesEndpoint(id));
  }

  private getParagraphsForPageNumber(id: string, pageNumber: number): Observable<IContractParagraphsData> {
    return this.httpClient.get<IContractParagraphsData>(this.endpointBuilder.getParagraphsWithPagesEndpoint(id, pageNumber));
  }
}
