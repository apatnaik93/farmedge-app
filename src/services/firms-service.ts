import {Injectable} from "@angular/core";
import {FIRMS} from "./mock-firms";
import {NavController} from "ionic-angular";

@Injectable()
export class FirmsService {
  private firms: any;
  private phone: any;
  public nav: NavController;

  constructor() {
    this.firms = FIRMS;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  getPhone() {
    return this.phone;
  }

  getAll() {
    return this.firms;
  }

  getItem(id) {
    for (var i = 0; i < this.firms.length; i++) {
      if (this.firms[i].id === parseInt(id)) {
        return this.firms[i];
      }
    }
    return null;
  }

  remove(item) {
    this.firms.splice(this.firms.indexOf(item), 1);
  }
}
