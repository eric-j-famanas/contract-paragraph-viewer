import {Inject, Injectable} from '@angular/core';
import {IEndpointBuilderService} from '../i-endpoint-builder-service';

@Injectable({
  providedIn: 'root'
})
export class ContractEndpointBuilderService implements IEndpointBuilderService {

  private _apiEndpoint: string;

  constructor(
    @Inject('trApiEndpoint')apiEndpoint: string
  ) {
    this._apiEndpoint = apiEndpoint + 'contracts/';
  }

  public get apiEndpoint(): string {
    return this._apiEndpoint;
  }

  public getAllContracts(): string {
    return this.apiEndpoint;
  }

  public getContractIdEndpoint(id: string): string {
    return `${this._apiEndpoint}${id}`;
  }

  public getParagraphsWithPagesEndpoint(id: string, pageNumber: number): string {
    return `${this.getContractIdEndpoint(id)}/paragraphs?page=${pageNumber}`;
  }

  public getParagraphsNoPagesEndpoint(id: string): string {
    return `${this.getContractIdEndpoint(id)}/paragraphs`;
  }

}
