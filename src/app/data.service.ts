import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl);
  }

  getUserPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.postsUrl}?userId=${userId}`);
  }

  getUserTodos(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  }
}
