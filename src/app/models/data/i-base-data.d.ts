import {EDataTypes} from './e-data-types';
import {IBaseAttribute} from '../general/i-base-attribute';

export interface IData<TAttribute extends IBaseAttribute> {
  type: EDataTypes;
  id: string;
  attributes: TAttribute;
}
