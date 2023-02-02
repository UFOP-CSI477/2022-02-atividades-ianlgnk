import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Estado } from "@prisma/client";

export class EstadoRepository implements Repository<number, Estado> {
  async create(entity: Estado): Promise<Estado> {
    const item = await Prisma.estado.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Estado): Promise<Estado> {
    const item = await Prisma.estado.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Estado> {
    const item = await Prisma.estado.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<Estado[]> {
    const itens = await Prisma.estado.findMany();

    return itens;
  }

  async findById(id: number): Promise<Estado | null> {
    const item = await Prisma.estado.findUnique({
      where: { id: id },
    });

    return item;
  }

  async findByName(name: string): Promise<Estado[]> {
    const itens = await Prisma.estado.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return itens;
  }
}
