import {HttpClient} from '@angular/common/http';
import {IEndpointBuilderService} from './i-endpoint-builder-service';

export abstract class BaseHttpService {
  protected constructor(
    protected readonly httpClient: HttpClient,
    protected readonly endpointBuilder: IEndpointBuilderService,
  ) {
  }
}
