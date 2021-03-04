import { Router } from 'express';

import { BaseRoute } from './base.route';
import { StatusController } from '../controllers';

export class StatusRoute extends BaseRoute {
  private statusController: StatusController;

  constructor(readonly router: Router) {
    super(router);

    this.statusController = new StatusController();
  }

  public loadLocalRoutes(): void {
    this.router.get('/status', this.statusController.index);
  }
}
