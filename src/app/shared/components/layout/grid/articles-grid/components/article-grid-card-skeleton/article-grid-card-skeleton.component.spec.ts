import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGridCardSkeletonComponent } from './article-grid-card-skeleton.component';

describe('ArticleGridCardSkeletonComponent', () => {
  let component: ArticleGridCardSkeletonComponent;
  let fixture: ComponentFixture<ArticleGridCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGridCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGridCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
