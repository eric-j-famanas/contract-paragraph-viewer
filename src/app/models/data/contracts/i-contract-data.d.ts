import {IContract} from '../../contracts/i-contract';
import {IRelationships} from '../../relationships/i-relationships';

export interface IContractData {
  data: IContract;
  relationships: IRelationships;
}
