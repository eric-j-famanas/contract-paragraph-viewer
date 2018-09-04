import {AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IContractData} from '../../../models/data/contracts/i-contract-data';

@Component({
  selector: 'app-tr-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent implements OnChanges {

  @Input('trContractData') contract: IContractData;

  public headerDisplay = 'Default Header Display';

  public ngOnChanges(changes: SimpleChanges) {

    // Here we use Angular's change detection to manage whenever
    // the data binding updates
    if (changes['contract'].currentValue != null) {

      // assert that current value is IContractData, since the data
      // binding contract is of IContractData
      this.headerDisplay = (changes['contract'].currentValue as IContractData).data.attributes.name;
    }
  }
}
