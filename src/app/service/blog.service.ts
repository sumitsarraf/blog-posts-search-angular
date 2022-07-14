import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { BlogPost } from '../model/BlogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  fetchPosts(id: string): Observable<BlogPost[]> {
    console.log(`${this.apiUrl}/posts?userId=${id}`);
    
    return this.http.get<BlogPost[]>(`${this.apiUrl}/posts?userId=${id}`).pipe(
      catchError(err => of([]))
    );
  }
}
