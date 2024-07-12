import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  userId: number | null = null;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('userId');
    this.userId = userIdParam ? +userIdParam : null;

    if (this.userId !== null) {
      this.dataService.getUserPosts(this.userId).subscribe(
        data => {
          this.posts = data;
        },
        error => {
          console.error('Error fetching user posts:', error);
        }
      );
    } else {
      console.error('Invalid user ID');
    }
  }
}
