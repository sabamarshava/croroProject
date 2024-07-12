import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  columns: string[] = ['name', 'username', 'phone', 'email', 'company.name'];
  searchTerm: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }

  viewPosts(userId: number) {
    this.router.navigate(['/user-posts', userId]);
  }

  viewTodos(userId: number) {
    this.router.navigate(['/todos', userId]);
  }
}
