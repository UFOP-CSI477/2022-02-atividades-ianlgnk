import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Produto } from "@prisma/client";

export class ProdutoRepository implements Repository<number, Produto> {
  async create(entity: Produto): Promise<Produto> {
    const item = await Prisma.produto.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Produto): Promise<Produto> {
    const item = await Prisma.produto.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Produto> {
    const item = await Prisma.produto.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<Produto[]> {
    const itens = await Prisma.produto.findMany();

    return itens;
  }

  async findById(id: number): Promise<Produto | null> {
    const item = await Prisma.produto.findUnique({
      where: { id: id },
    });

    return item;
  }
}
