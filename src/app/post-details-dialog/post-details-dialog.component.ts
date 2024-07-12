import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details-dialog.component.html',
  styleUrls: ['./post-details-dialog.component.css']
})
export class PostDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
