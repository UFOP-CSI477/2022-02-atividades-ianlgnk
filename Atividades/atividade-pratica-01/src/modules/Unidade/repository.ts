import { Unidade } from ".prisma/client";
import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";

export class UnidadeRepository implements Repository<number, Unidade> {
  async create(entity: Unidade): Promise<Unidade> {
    const item = await Prisma.unidade.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Unidade): Promise<Unidade> {
    const item = await Prisma.unidade.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Unidade> {
    const item = await Prisma.unidade.delete({ where: { id: id } });

    return item;
  }

  async listAll(): Promise<Unidade[]> {
    const itens = await Prisma.unidade.findMany();

    return itens;
  }

  async findById(id: number): Promise<Unidade | null> {
    const itens = await Prisma.unidade.findUnique({ where: { id: id } });

    return itens;
  }

  async findByName(name: string): Promise<Unidade[]> {
    const itens = await Prisma.unidade.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return itens;
  }
}
