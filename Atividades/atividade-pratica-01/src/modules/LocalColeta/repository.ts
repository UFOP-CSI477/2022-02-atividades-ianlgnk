import { LocalColeta } from ".prisma/client";
import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";

export class LocalColetaRepository implements Repository<number, LocalColeta> {
  async create(entity: LocalColeta): Promise<LocalColeta> {
    const item = await Prisma.localColeta.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: LocalColeta): Promise<LocalColeta> {
    const item = await Prisma.localColeta.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<LocalColeta> {
    const item = await Prisma.localColeta.delete({ where: { id: id } });

    return item;
  }

  async listAll(): Promise<LocalColeta[]> {
    const itens = await Prisma.localColeta.findMany();

    return itens;
  }

  async findById(id: number): Promise<LocalColeta | null> {
    const itens = await Prisma.localColeta.findUnique({ where: { id: id } });

    return itens;
  }

  async findByName(name: string): Promise<LocalColeta[]> {
    const itens = await Prisma.localColeta.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return itens;
  }
}
