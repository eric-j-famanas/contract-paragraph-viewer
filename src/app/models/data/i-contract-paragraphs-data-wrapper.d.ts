import {IContractParagraph} from '../contracts/i-contract-paragraph';
import {IPagination} from '../pagination/i-pagination';

export interface IContractParagraphsDataWrapper {
  data: IContractParagraph[];
  pagination: IPagination;
}
