import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { TipoSanguineo } from "@prisma/client";

export class TipoSanguineoRepository
  implements Repository<number, TipoSanguineo>
{
  async create(entity: TipoSanguineo): Promise<TipoSanguineo> {
    const item = await Prisma.tipoSanguineo.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: TipoSanguineo): Promise<TipoSanguineo> {
    const item = await Prisma.tipoSanguineo.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<TipoSanguineo> {
    const item = await Prisma.tipoSanguineo.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<TipoSanguineo[]> {
    const itens = await Prisma.tipoSanguineo.findMany();

    return itens;
  }

  async findById(id: number): Promise<TipoSanguineo | null> {
    const item = await Prisma.tipoSanguineo.findUnique({
      where: { id: id },
    });

    return item;
  }
}
