import {IContract} from '../contracts/i-contract';
import {IRelationships} from '../relationships/i-relationships';

export interface IContractDataWrapper {
  data: IContract;
  relationships: IRelationships;
}
