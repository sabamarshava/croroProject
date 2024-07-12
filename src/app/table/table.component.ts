import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  @Output() viewPosts = new EventEmitter<number>();
  @Output() viewTodos = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<number>();

  getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((o, i) => (o ? o[i] : null), obj);
  }

  viewPostsHandler(userId: number) {
    this.viewPosts.emit(userId);
  }

  viewTodosHandler(userId: number) {
    this.viewTodos.emit(userId);
  }

  viewDetailsHandler(postId: number) {
    this.viewDetails.emit(postId);
  }
}

