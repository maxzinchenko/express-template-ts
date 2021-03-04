import { ENV } from '../constants';

export class StatusService {
  static getStatus() {
    return { online: true, environment: ENV, message: 'Ready to accept connections', status: 'OK' };
  }
}
