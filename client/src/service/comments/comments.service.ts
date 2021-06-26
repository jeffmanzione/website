
import { Injectable } from '@angular/core';
import { Service } from '../service';

@Injectable()
export class CommentsService extends Service {
  list(): Promise<Comment[]> {
    return this.sendRequest('/_/api/CommentsApi.list', 'GET')
      .then((response: Object) => (response as [])
        .map((commentList) => new Comment(commentList)));
  }
}

export class Comment {
  messageId: number;
  username: string;
  message: string;
  createdOn: string;
  constructor(commentListObj: any[]) {
    this.messageId = commentListObj[0];
    this.username = commentListObj[1];
    this.message = commentListObj[2];
    this.createdOn = commentListObj[3];
  }

}