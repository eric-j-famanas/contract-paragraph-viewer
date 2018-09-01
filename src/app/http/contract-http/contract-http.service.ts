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

  private server: string = 'http://localhost:3000/contracts';

  public getAllContracts() {
    return this.http.get(`${this.server}`).subscribe((response) => {
      console.log(response);
    });
  }

  public getSingleContract(id: string, pageNumber?: number) {
    if (pageNumber == null) {
      return this.getContractNoPageNumber(id);
    }

    return this.getContractWithPageNumber(id, pageNumber);

  }

  private getContractNoPageNumber(id: string) {
    return this.http.get(`${this.server}/${id}`).subscribe((response) => {
      console.log(response);
    });
  }

  private getContractWithPageNumber(id: string, pageNumber: number) {
    return this.http.get(`${this.server}/${id}?page=${pageNumber}`).subscribe((response) => {
      console.log(response);
    });
  }
}
