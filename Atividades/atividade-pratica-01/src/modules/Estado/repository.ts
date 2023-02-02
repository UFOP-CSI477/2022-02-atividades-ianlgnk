import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Estado } from "@prisma/client";

export class EstadoRepository implements Repository<number, Estado> {
  async create(entity: Estado): Promise<Estado> {
    const estado = await Prisma.estado.create({
      data: { ...entity },
    });

    return estado;
  }

  async update(id: number, entity: Estado): Promise<Estado> {
    const estado = await Prisma.estado.update({
      where: { id: id },
      data: { ...entity },
    });

    return estado;
  }

  async delete(id: number): Promise<Estado> {
    const estado = await Prisma.estado.delete({
      where: { id: id },
    });

    return estado;
  }

  async listAll(): Promise<Estado[]> {
    const estado = await Prisma.estado.findMany();

    return estado;
  }

  async findById(id: number): Promise<Estado | null> {
    const estado = await Prisma.estado.findUnique({
      where: { id: id },
    });

    return estado;
  }

  async findByName(name: string): Promise<Estado[]> {
    const estados = await Prisma.estado.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return estados;
  }
}
