import {IContractParagraph} from '../../contracts/i-contract-paragraph';
import {IPagination} from '../../pagination/i-pagination';

export interface IContractParagraphsData {
  data: IContractParagraph[];
  pagination: IPagination;
}
