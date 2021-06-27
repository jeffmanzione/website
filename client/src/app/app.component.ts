import { Component, OnInit } from '@angular/core';
import { CommentsService, Comment } from 'src/service/comments/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private commentsService: CommentsService) { }

  public comments: Comment[] = [];

  ngOnInit(): void {
    this.commentsService.list().then((result) => this.comments = result);
  }
}
