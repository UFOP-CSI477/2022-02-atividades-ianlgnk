import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { User } from "@prisma/client";

export class UserRepository implements Repository<number, User> {
  async create(entity: User): Promise<User> {
    const item = await Prisma.user.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: User): Promise<User> {
    const item = await Prisma.user.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<User> {
    const item = await Prisma.user.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<User[]> {
    const itens = await Prisma.user.findMany();

    return itens;
  }

  async findByPk(id: number): Promise<User | null> {
    const item = await Prisma.user.findUnique({
      where: { id: id },
    });

    return item;
  }

  async findByEmail(email: string): Promise<User | null> {
    const item = await Prisma.user.findUnique({
      where: { email: email },
    });

    return item;
  }

  async findByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    const item = await Prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return item;
  }
}
