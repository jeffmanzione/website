import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/service/comments/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public commentsService: CommentsService) { }

  public comments: Object[] = [];


  ngOnInit(): void {
    this.commentsService.list().then((result) => this.comments = result);
  }

}
