import { User } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { UserRepository } from "./repository";

export class UserService implements Service<User> {
  private repository: UserRepository = new UserRepository();

  async create(entity: any): Promise<User> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<User> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<User> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<User[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findByPk(id: number): Promise<User | null> {
    const item = await this.repository.findByPk(id);

    return item;
  }

  async findByEmail(email: string): Promise<User | null> {
    const item = await this.repository.findByEmail(email);

    return item;
  }

  async findByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    const item = await this.repository.findByEmailAndPassword(email, password);

    return item;
  }
}
