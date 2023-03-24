import { Request, Response } from "express";
import { APIError } from "../../shared/error";
import { Controller } from "../../shared/utils/ControllerType";
import { UserService } from "./service";
import jwt from "jsonwebtoken";

const service = new UserService();

export class UserController implements Controller {
  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      if (id === "" || id === undefined || id === null)
        throw new APIError("ID is required to update a register!", 400);

      if (isNaN(parseInt(id)))
        throw new APIError("ID provided is not a number!", 400);

      const updatedUser = await service.update(Number(id), request.body);

      const privateKey = "estagionow";
      const token = jwt.sign(
        {
          email: updatedUser.email,
          password: updatedUser.password,
        },
        privateKey,
        { expiresIn: "1h" }
      );

      return response.status(200).json({
        ...updatedUser,
        token,
      });
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

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body;
      const user = await service.findByEmail(email);

      if (user !== null)
        throw new APIError("Esse e-mail já possui uma conta associada!", 400);

      const createdUser = await service.create(request.body);

      const privateKey = "estagionow";
      const token = jwt.sign(
        {
          email: createdUser.email,
          password: createdUser.password,
        },
        privateKey,
        { expiresIn: "1h" }
      );

      return response.status(201).json({
        ...createdUser,
        token,
      });
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }

  async login(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const userFound = await service.findByEmailAndPassword(email, password);

      if (userFound === null)
        throw new APIError("E-mail e/ou senha incorretos!", 400);

      const privateKey = "estagionow";
      const token = jwt.sign(
        {
          email: email,
          password: password,
        },
        privateKey,
        { expiresIn: "1h" }
      );

      return response.status(200).json({
        ...userFound,
        token,
      });
    } catch (err: any) {
      if (err instanceof APIError)
        throw new APIError(err.message, err.statusCode);

      throw new APIError(err.toString());
    }
  }
}
