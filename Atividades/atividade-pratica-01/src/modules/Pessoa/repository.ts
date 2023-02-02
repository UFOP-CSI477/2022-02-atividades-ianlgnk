import { Pessoa } from ".prisma/client";
import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";

export class PessoaRepository implements Repository<number, Pessoa> {
  async create(entity: Pessoa): Promise<Pessoa> {
    const item = await Prisma.pessoa.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: Pessoa): Promise<Pessoa> {
    const item = await Prisma.pessoa.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<Pessoa> {
    const item = await Prisma.pessoa.delete({ where: { id: id } });

    return item;
  }

  async listAll(): Promise<Pessoa[]> {
    const itens = await Prisma.pessoa.findMany();

    return itens;
  }

  async findById(id: number): Promise<Pessoa | null> {
    const item = await Prisma.pessoa.findUnique({ where: { id: id } });

    return item;
  }

  async findByName(name: string): Promise<Pessoa[]> {
    const itens = await Prisma.pessoa.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return itens;
  }
}
