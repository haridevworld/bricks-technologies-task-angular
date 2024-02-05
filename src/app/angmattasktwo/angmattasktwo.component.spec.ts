import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmattasktwoComponent } from './angmattasktwo.component';

describe('AngmattasktwoComponent', () => {
  let component: AngmattasktwoComponent;
  let fixture: ComponentFixture<AngmattasktwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngmattasktwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngmattasktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
