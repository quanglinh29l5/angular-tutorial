import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  imports: [NgFor],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: any[] = [];
  private subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.posts = data;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
