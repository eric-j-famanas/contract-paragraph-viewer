import {IStateService} from './i-state.service';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

export abstract class BaseStateService<TState> implements IStateService<TState> {
  public readonly behaviorSubject: BehaviorSubject<TState | null> = new BehaviorSubject<TState | null>(null);
  public readonly observableState: Observable<TState | null> = this.behaviorSubject.asObservable();

  /**
   * Returns the current value set in the behavior subject.
   * This will can be accessed as the most current value
   * in the observable stream
   */
  getState(): TState | null {
    return this.behaviorSubject.getValue();
  }

  /**
   * Sets the most current value in the behavior subject.
   * This will also set the most current value in the observable stream
   * Use this function to swap states in a multi-state application
   *
   * @param state
   */
  setState(state: TState): void {
    this.behaviorSubject.next(state);
  }

  /**
   * This will return a subscription carrying a copy of the handle function.
   * The handle function will fire every time the subscription changs.
   * This is most appropriate when the handler is set in the constructor
   * for services and in ngOnInit in component classes
   *
   * @param handler
   */
  subscribeToState(handler: (state: TState) => void): Subscription {
    return this.observableState.subscribe(handler);
  }
}
