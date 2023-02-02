import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Doacao } from "@prisma/client";

export class DoacaoRepository implements Repository<number, Doacao> {
  async create(entity: Doacao): Promise<Doacao> {
    const item = await Prisma.doacao.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Doacao): Promise<Doacao> {
    const item = await Prisma.doacao.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Doacao> {
    const item = await Prisma.doacao.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<Doacao[]> {
    const itens = await Prisma.doacao.findMany();

    return itens;
  }

  async findById(id: number): Promise<Doacao | null> {
    const item = await Prisma.doacao.findUnique({
      where: { id: id },
    });

    return item;
  }
}
