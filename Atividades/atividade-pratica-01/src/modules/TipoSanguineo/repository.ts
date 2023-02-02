import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { TipoSanguineo } from "@prisma/client";

export class TipoSanguineoRepository
  implements Repository<number, TipoSanguineo>
{
  async create(entity: TipoSanguineo): Promise<TipoSanguineo> {
    const tipoSanguineo = await Prisma.tipoSanguineo.create({
      data: { ...entity },
    });

    return tipoSanguineo;
  }

  async update(id: number, entity: TipoSanguineo): Promise<TipoSanguineo> {
    const tipoSanguineo = await Prisma.tipoSanguineo.update({
      where: { id: id },
      data: { ...entity },
    });

    return tipoSanguineo;
  }

  async delete(id: number): Promise<TipoSanguineo> {
    const tipoSanguineo = await Prisma.tipoSanguineo.delete({
      where: { id: id },
    });

    return tipoSanguineo;
  }

  async listAll(): Promise<TipoSanguineo[]> {
    const tipoSanguineo = await Prisma.tipoSanguineo.findMany();

    return tipoSanguineo;
  }

  async findById(id: number): Promise<TipoSanguineo | null> {
    const tipoSanguineo = await Prisma.tipoSanguineo.findUnique({
      where: { id: id },
    });

    return tipoSanguineo;
  }
}
