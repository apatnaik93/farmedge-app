import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../environments/environment';
import {User, Device} from "../models/models";
import {UserService} from "./user.service";

@Injectable()
export class HttpService {
  devices;

  constructor(public httpClient: HttpClient,
              public userService: UserService) {
  }

  registerUser(user: User): Promise<any> {
    return this.httpClient.post(`${environment.api_url}/user/registerUser`, {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      location: user.location
    })
      .toPromise()
      .then(response => response);
  }

  getUser(mobile: any): Promise<any> {
    return this.httpClient.get(`${environment.api_url}/user/getUser/${mobile}`)
      .toPromise()
      .then(response => response);
  }

  registerDevice(device: Device): Promise<any> {
    return this.httpClient.post(`${environment.api_url}/device/registerDevice`, {
      userId: device.userId,
      name: device.name,
      simNumber: device.simNumber,
      location: device.location,
      status: false
    })
      .toPromise()
      .then(response => response);
  }

  getDevices(): Promise<any> {
    let userId = this.userService.getUser().userId;
    return this.httpClient.get(`${environment.api_url}/device/getDevices/${userId}`)
      .toPromise()
      .then(response => response);
  }

  onOperation(deviceId: String): Promise<any> {
    return this.httpClient.post(`${environment.api_url}/pump/onOperation`, {
      deviceId: deviceId
    })
      .toPromise()
      .then(response => response);
  }

  offOperation(deviceId: String, operationId: String): Promise<any> {
    return this.httpClient.put(`${environment.api_url}/pump/offOpeartion`, {
      deviceId: deviceId,
      operationId: operationId
    })
      .toPromise()
      .then(response => response);
  }

}
