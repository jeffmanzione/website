
import { Injectable } from '@angular/core';
import { Service } from '../service';

@Injectable()
export class ApisService extends Service {
  list(): Promise<ApiRef[]> {
    return this.sendRequest('/_/api/ApiRegistry.list', 'GET')
      .then((response: Object) => this._toApiObjects((response as Object)));
  }

  _toApiObjects(apis: Object) : ApiRef[] {
    let apiEntries: ApiRef[] = [];
    for (const [apiName, apiObj] of Object.entries(apis)) {
      apiEntries.push(new ApiRef(apiName, apiObj));
    }
    return apiEntries;
  }
}

export class ApiMethodRef {
  method: string;
  url: string;
  constructor(method: string, url:string) {
    this.method = method;
    this.url = url;
  }
}

export class ApiRef {
  name: string;
  methods: ApiMethodRef[] = [];
  constructor(name: string, apiMap: Object) {
    this.name = name;
    for (const [method, url] of Object.entries(apiMap)) {
      this.methods.push(new ApiMethodRef(method, url));
    }
  }
}