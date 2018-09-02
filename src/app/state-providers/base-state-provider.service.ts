import {IStateProviderService} from './i-state-provider.service';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

export abstract class BaseStateProviderService<TState> implements IStateProviderService<TState> {
  public readonly behaviorSubject: BehaviorSubject<TState | null> = new BehaviorSubject<TState | null>(null);
  public readonly observableState: Observable<TState | null> = this.behaviorSubject.asObservable();

  getState(): TState | null {
    return this.behaviorSubject.getValue();
  }

  setState(state: TState): void {
    this.behaviorSubject.next(state);
  }

  subscribeToState(handler: (state: TState) => void): Subscription {
    return this.observableState.subscribe(handler);
  }
}
