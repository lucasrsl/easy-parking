import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscalaPage } from './escala.page';

describe('EscalaPage', () => {
  let component: EscalaPage;
  let fixture: ComponentFixture<EscalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
