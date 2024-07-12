import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  columns: string[] = ['userId', 'title'];

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => this.posts = data);
  }

  viewDetails(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    this.dialog.open(PostDetailsComponent, {
      data: post
    });
  }
}
