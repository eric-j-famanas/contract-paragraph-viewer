import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractHttpService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  // TODO: This should be a token
  private serverUri = 'http://localhost:3000/contracts';


  public getAllContracts() {
    return this.http.get(`${this.serverUri}`).subscribe((response) => {
      console.log(response);
    });
  }

  public getSingleContract(id: string, pageNumber?: number) {
    if (pageNumber == null) {
      return this.getContractNoPageNumber(id);
    }

    return this.getContractWithPageNumber(id, pageNumber);
  }

  public getAllParagraphs(id: string) {
    return this.http.get(`${this.endpointWithId(id)}/paragraphs`).subscribe((response) => {
      console.log(response);
    });
  }

  private getContractNoPageNumber(id: string) {
    return this.http.get(`${this.endpointWithId(id)}`).subscribe((response) => {
      console.log(response);
    });
  }

  private getContractWithPageNumber(id: string, pageNumber: number) {
    return this.http.get(`${this.endpointWithId(id)}?page=${pageNumber}`).subscribe((response) => {
      console.log(response);
    });
  }

  private endpointWithId(id: string): string {
    return `${this.serverUri}/${id}`;
  }
}
