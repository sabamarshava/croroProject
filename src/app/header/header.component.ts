import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  currentTime: string;

  constructor() {
    this.currentDate = this.getFormattedDate(new Date());
    this.currentTime = this.getFormattedTime(new Date());
  }

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      this.currentTime = this.getFormattedTime(now);
    }, 1000);
  }

  getFormattedDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  getFormattedTime(date: Date): string {
    return date.toLocaleTimeString();
  }
}
