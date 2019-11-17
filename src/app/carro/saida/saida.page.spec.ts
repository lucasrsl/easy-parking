import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaidaPage } from './saida.page';

describe('SaidaPage', () => {
  let component: SaidaPage;
  let fixture: ComponentFixture<SaidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
