import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenLoginComponent } from './template-driven-login.component';

describe('TemplateDrivenLoginComponent', () => {
  let component: TemplateDrivenLoginComponent;
  let fixture: ComponentFixture<TemplateDrivenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
