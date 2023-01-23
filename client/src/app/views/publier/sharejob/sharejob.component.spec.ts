/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharejobComponent } from './sharejob.component';

describe('SharejobComponent', () => {
  let component: SharejobComponent;
  let fixture: ComponentFixture<SharejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
