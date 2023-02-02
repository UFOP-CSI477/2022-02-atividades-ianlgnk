import { Pessoa } from ".prisma/client";
import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";

export class PessoaRepository implements Repository<number, Pessoa> {
  async create(entity: Pessoa): Promise<Pessoa> {
    const pessoa = await Prisma.pessoa.create({
      data: { ...entity },
    });

    return pessoa;
  }

  async update(id: number, entity: Pessoa): Promise<Pessoa> {
    const pessoa = await Prisma.pessoa.update({
      where: { id: id },
      data: { ...entity },
    });

    return pessoa;
  }

  async delete(id: number): Promise<Pessoa> {
    const pessoa = await Prisma.pessoa.delete({ where: { id: id } });

    return pessoa;
  }

  async listAll(): Promise<Pessoa[]> {
    const pessoas = await Prisma.pessoa.findMany();

    return pessoas;
  }

  async findById(id: number): Promise<Pessoa | null> {
    const pessoa = await Prisma.pessoa.findUnique({ where: { id: id } });

    return pessoa;
  }

  async findByName(name: string): Promise<Pessoa[]> {
    const pessoas = await Prisma.pessoa.findMany({
      where: {
        nome: {
          contains: name,
        },
      },
    });

    return pessoas;
  }
}
