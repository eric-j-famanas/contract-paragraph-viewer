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

  public getSingleContract(id: string) {
    return this.http.get(`${this.endpointWithId(id)}`).subscribe((response) => {
      console.log(response);
    });
  }

  public getAllParagraphsForContract(id: string, pageNumber?: number) {
    if (pageNumber == null) {
      return this.getParagraphsWithNoPageNumber(id);
    }

    return this.getParagraphsForPageNumber(id, pageNumber);
  }

  private getParagraphsWithNoPageNumber(id: string) {
    return this.http.get(`${this.endpointWithId(id)}/paragraphs`).subscribe((response) => {
      console.log(response);
    });
  }

  private getParagraphsForPageNumber(id: string, pageNumber: number) {
    return this.http.get(`${this.endpointWithId(id)}/paragraphs?page=${pageNumber}`).subscribe((response) => {
      console.log(response);
    });
  }

  private endpointWithId(id: string): string {
    return `${this.serverUri}/${id}`;
  }
}
