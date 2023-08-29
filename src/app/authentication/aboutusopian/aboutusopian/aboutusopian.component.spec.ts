import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusopianComponent } from './aboutusopian.component';

describe('AboutusopianComponent', () => {
  let component: AboutusopianComponent;
  let fixture: ComponentFixture<AboutusopianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusopianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusopianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
