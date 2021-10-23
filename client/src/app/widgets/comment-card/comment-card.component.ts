import { Component, Input } from '@angular/core';
import { Comment } from 'src/service/comments/comments.service';

@Component({
  selector: 'comment',
  templateUrl: 'comment-card.component.html',
  styleUrls: ['comment-card.component.scss'],
})
export class CommentCardComponent {
  @Input() comment: Comment | null = null;
}