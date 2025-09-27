import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerShowcaseComponent } from './docker-showcase.component';

describe('DockerShowcaseComponent', () => {
  let component: DockerShowcaseComponent;
  let fixture: ComponentFixture<DockerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockerShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
