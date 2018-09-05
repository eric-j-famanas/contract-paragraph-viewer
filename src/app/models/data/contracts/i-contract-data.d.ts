import {IContract} from '../../contracts/i-contract';
import {IRelationships} from '../../relationships/i-relationships';
import {IVirtualizedScrollState} from '../../general/i-virtualized-scroll';

export interface IContractData extends IVirtualizedScrollState {
  data: IContract;
  relationships: IRelationships;
}
