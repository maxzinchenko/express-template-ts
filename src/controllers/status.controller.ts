import { Request, Response } from 'express';

import { BaseController } from './index';
import { StatusService } from '../services';

export class StatusController extends BaseController {
  constructor() {
    super();
  }

  public index(_: Request, res: Response): Response {
    try {
      return super.ok(res, StatusService.getStatus());
    } catch (error) {
      return super.fail(res, error);
    }
  }
}
