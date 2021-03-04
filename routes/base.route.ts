import { Router } from 'express';

export abstract class BaseRoute {
  protected constructor(protected router: Router) {
    this.router = router;
  }
}
