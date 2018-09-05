import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContractHttpModule} from './http/contract-http/contract-http.module';
import {ContractViewerModule} from './components/contract-viewer/contract-viewer.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ContractViewerModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
