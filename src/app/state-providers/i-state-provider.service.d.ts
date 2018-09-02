import {BehaviorSubject, Observable, Subscription} from 'rxjs';

export interface IStateProviderService<TState> {

  // the subject that is to be the subject to changes
  behaviorSubject: BehaviorSubject<TState | null>;

  // the state that is to be observed and reacted to
  observableState: Observable<TState | null>;

  // used by classes to subscribe to state change
  subscribeToState(handler: (state: TState) => void): Subscription;

  // returns the current state
  getState(): TState | null;

  // sets the current state
  setState(state: TState): void;
}
