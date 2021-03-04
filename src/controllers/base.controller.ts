import { Response } from 'express';

export abstract class BaseController {
  public ok<T>(res: Response, dto: T): Response {
    return res.status(200).json(dto);
  }

  public created<T>(res: Response, dto: T): Response {
    return res.status(201).json(dto);
  }

  public clientError(res:Response, message: string = 'Bad Request'): Response {
    return res.status(400).json({ message });
  }

  public forbidden(res: Response, message: string = 'Forbidden'): Response {
    return res.status(403).json({ message });
  }

  public notFound(res: Response, message: string = 'Not Found'): Response {
    return res.status(404).json({ message });
  }

  public fail(res: Response, error: Error | string): Response {
    console.log('\n\n\n', error, '\n\n\n');

    return res.status(500).json({ message: error.toString() });
  }
}
