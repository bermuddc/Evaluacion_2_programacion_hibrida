import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfiguracionComponent } from './configuracion.component';

describe('ConfiguracionComponent', () => {
  let component: ConfiguracionComponent;
  let fixture: ComponentFixture<ConfiguracionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguracionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
