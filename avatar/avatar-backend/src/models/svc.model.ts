export class Service {
  id: string;
  data: object = {};

  constructor(id: string, data?: object) {
    this.id = id;
    this.data = data || this.data;
  }
}
