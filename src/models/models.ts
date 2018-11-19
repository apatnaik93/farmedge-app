export class User {
  userId: string;
  name: string;
  email: string;
  mobile: number;
  location: any;
}

export class Device {
  deviceId: string;
  userId: string;
  name: string;
  simNumber: string;
  location: string;
  status: boolean;
  operationId: string;
}

