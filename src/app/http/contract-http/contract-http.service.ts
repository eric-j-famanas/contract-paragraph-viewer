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
}
