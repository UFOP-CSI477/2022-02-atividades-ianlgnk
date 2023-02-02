import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Distribuicao } from "@prisma/client";

export class DistribuicaoRepository
  implements Repository<number, Distribuicao>
{
  async create(entity: Distribuicao): Promise<Distribuicao> {
    const item = await Prisma.distribuicao.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Distribuicao): Promise<Distribuicao> {
    const item = await Prisma.distribuicao.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Distribuicao> {
    const item = await Prisma.distribuicao.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<Distribuicao[]> {
    const itens = await Prisma.distribuicao.findMany();

    return itens;
  }

  async findById(id: number): Promise<Distribuicao | null> {
    const item = await Prisma.distribuicao.findUnique({
      where: { id: id },
    });

    return item;
  }
}
