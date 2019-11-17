import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValorPage } from './valor.page';

describe('ValorPage', () => {
  let component: ValorPage;
  let fixture: ComponentFixture<ValorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
