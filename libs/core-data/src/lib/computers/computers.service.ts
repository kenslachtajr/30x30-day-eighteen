import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from './computer.model';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  model = 'computers';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  findOne(computer: Computer) {
    return this.httpClient.get(this.getUrlForId(computer));
  }

  create(computer) {
    return this.httpClient.post(this.getUrl(), computer);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(computer: Computer) {
    return this.httpClient.patch(this.getUrlForId(computer.id), computer);
  }

  delete(computer: Computer) {
    return this.httpClient.delete(this.getUrlForId(computer.id));
  }
}
