import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tr-cv-paragraph',
  templateUrl: './cv-paragraph.component.html',
  styleUrls: ['./cv-paragraph.component.css']
})
export class CvParagraphComponent {

  @Input('trParagraphText') public paragraphText;

}
