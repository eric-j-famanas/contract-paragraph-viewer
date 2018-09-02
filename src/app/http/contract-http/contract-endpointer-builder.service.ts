import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractEndpointerBuilderService {

  private _serverUri: string;

  constructor(@Inject('trServerUri')serverUri: string) {
    this._serverUri = serverUri;
  }


  public getParagraphsWithPagesEndpoint(id: string, pageNumber: number): string {
    return `${this.getContractIdEndpoint(id)}/paragraphs?page=${pageNumber}`;
  }

  public getParagraphsNoPagesEndpoint(id: string): string {
    return `${this.getContractIdEndpoint(id)}/paragraphs`;
  }

  public getContractIdEndpoint(id: string): string {
    return `${this._serverUri}/${id}`;
  }
}
