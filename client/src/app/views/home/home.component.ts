import { Component, OnInit } from '@angular/core';
import { CommentsService, Comment } from 'src/service/comments/comments.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private commentsService: CommentsService) { }

  public comments: Comment[] = [];

  ngOnInit(): void {
    this.commentsService.list().then((result) => this.comments = result);
  }
}
