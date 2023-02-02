import { Request, Response } from "express";

export type Controller = {
  create(request: Request, response: Response): Promise<Response>;
  update(request: Request, response: Response): Promise<Response>;
  delete(request: Request, response: Response): Promise<Response>;
  listAll(request: Request, response: Response): Promise<Response>;
  findById(request: Request, response: Response): Promise<Response>;
  findByName?(request: Request, response: Response): Promise<Response>;
};
