import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { liveSearch } from '../../live-search.operator';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-posts-search',
  templateUrl: './blog-posts-search.component.html',
  styleUrls: ['./blog-posts-search.component.css'],
})
export class BlogPostsSearchComponent {
  private userIdSubject = new Subject<string>();

  readonly blogPosts$ = this.userIdSubject.pipe(
    liveSearch((userId) => this.blogService.fetchPosts(userId))
  );

  constructor(private blogService: BlogService) {}

  searchPosts(event: any) {
    this.userIdSubject.next(event.data);
  }
}
