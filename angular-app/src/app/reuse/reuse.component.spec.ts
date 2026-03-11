import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseComponent } from './reuse.component';

describe('ReuseComponent', () => {
  let component: ReuseComponent;
  let fixture: ComponentFixture<ReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
