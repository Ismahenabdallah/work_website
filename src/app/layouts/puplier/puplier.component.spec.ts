import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuplierComponent } from './puplier.component';

describe('PuplierComponent', () => {
  let component: PuplierComponent;
  let fixture: ComponentFixture<PuplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
