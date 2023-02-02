import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Cidade } from "@prisma/client";

export class CidadeRepository implements Repository<number, Cidade> {
  async create(entity: Cidade): Promise<Cidade> {
    const item = await Prisma.cidade.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Cidade): Promise<Cidade> {
    const item = await Prisma.cidade.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Cidade> {
    const item = await Prisma.cidade.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<Cidade[]> {
    const itens = await Prisma.cidade.findMany();

    return itens;
  }

  async findById(id: number): Promise<Cidade | null> {
    const item = await Prisma.cidade.findUnique({
      where: { id: id },
    });

    return item;
  }

  async findByName(name: string): Promise<Cidade[]> {
    const itens = await Prisma.cidade.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return itens;
  }
}
