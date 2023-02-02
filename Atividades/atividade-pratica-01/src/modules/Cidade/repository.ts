import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { Cidade } from "@prisma/client";

export class CidadeRepository implements Repository<number, Cidade> {
  async create(entity: Cidade): Promise<Cidade> {
    const cidade = await Prisma.cidade.create({
      data: { ...entity },
    });

    return cidade;
  }

  async update(id: number, entity: Cidade): Promise<Cidade> {
    const cidade = await Prisma.cidade.update({
      where: { id: id },
      data: { ...entity },
    });

    return cidade;
  }

  async delete(id: number): Promise<Cidade> {
    const cidade = await Prisma.cidade.delete({
      where: { id: id },
    });

    return cidade;
  }

  async listAll(): Promise<Cidade[]> {
    const cidade = await Prisma.cidade.findMany();

    return cidade;
  }

  async findById(id: number): Promise<Cidade | null> {
    const cidade = await Prisma.cidade.findUnique({
      where: { id: id },
    });

    return cidade;
  }

  async findByName(name: string): Promise<Cidade[]> {
    const cidades = await Prisma.cidade.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return cidades;
  }
}
