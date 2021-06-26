import { Component, Input } from '@angular/core';
import { Comment } from 'src/service/comments/comments.service';

@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss'],
})
export class CommentComponent {
  @Input() comment: Comment | null = null;
}