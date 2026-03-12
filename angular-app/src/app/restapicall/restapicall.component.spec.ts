import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapicallComponent } from './restapicall.component';

describe('RestapicallComponent', () => {
  let component: RestapicallComponent;
  let fixture: ComponentFixture<RestapicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestapicallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestapicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
