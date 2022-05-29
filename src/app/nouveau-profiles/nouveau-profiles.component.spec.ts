import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProfilesComponent } from './nouveau-profiles.component';

describe('NouveauProfilesComponent', () => {
  let component: NouveauProfilesComponent;
  let fixture: ComponentFixture<NouveauProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
