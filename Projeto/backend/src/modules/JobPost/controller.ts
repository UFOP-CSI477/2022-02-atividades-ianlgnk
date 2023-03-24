import { Request, Response } from "express";
import { APIError } from "../../shared/error";
import { Controller } from "../../shared/utils/ControllerType";
import { JobPostService } from "./service";

const service = new JobPostService();

export class JobPostController implements Controller {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const result = await service.create(request.body);

      return response.status(201).json(result);
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      if (id === "" || id === undefined || id === null)
        throw new APIError("ID is required to update a register!", 400);

      if (isNaN(parseInt(id)))
        throw new APIError("ID provided is not a number!", 400);

      const result = await service.update(Number(id), request.body);

      return response.status(200).json(result);
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      if (id === "" || id === undefined || id === null)
        throw new APIError("ID is required to remove a register!", 400);

      if (isNaN(parseInt(id)))
        throw new APIError("ID provided is not a number!", 400);

      const result = await service.delete(Number(id));

      return response.status(200).json(result);
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }

  async listAll(request: Request, response: Response): Promise<Response> {
    try {
      const result = await service.listAll();

      return response.status(200).json(result);
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }

  async findByPk(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      if (id === "" || id === undefined || id === null)
        throw new APIError("ID is required to search a register!", 400);

      if (isNaN(parseInt(id)))
        throw new APIError("ID provided is not a number!", 400);

      const result = await service.findByPk(Number(id));

      if (result === null)
        throw new APIError("No register with ID: " + id + " was found!", 404);

      return response.status(200).json(result);
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }

  async findByCompanyId(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const jobs = await service.findByCompanyId(Number(request.params.id));

      return response.status(200).json(jobs);
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }
}
