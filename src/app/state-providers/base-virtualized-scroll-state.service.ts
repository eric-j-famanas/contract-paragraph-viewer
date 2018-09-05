import {BaseStateService} from './base-state.service';
import {IVirtualizedScrollState} from '../models/general/i-virtualized-scroll';

export class BaseVirtualizedScrollStateService<TState extends IVirtualizedScrollState> extends BaseStateService<TState> {
  public getStateScrollPosition(): any {
    // TODO: Return scroll position from TItem
  }
}
