import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  userId: number | null = null;
  todos: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('userId');
    this.userId = userIdParam ? +userIdParam : null;

    if (this.userId !== null) {
      this.dataService.getUserTodos(this.userId).subscribe(data => this.todos = data);
    }
  }
}
