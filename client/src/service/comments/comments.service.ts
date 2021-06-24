
import { Injectable } from '@angular/core';
import { Service } from '../service';

@Injectable()
export class CommentsService extends Service {
  list(): Promise<Object[]> {
    return (this.sendRequest('/_/api/CommentsApi.list', 'GET') as Promise<Object[]>);
  }
}