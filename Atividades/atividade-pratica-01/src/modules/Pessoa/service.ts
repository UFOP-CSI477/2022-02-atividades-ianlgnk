import { Pessoa } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { PessoaRepository } from "./repository";

export class PessoaService implements Service<Pessoa> {
  private repository: PessoaRepository = new PessoaRepository();

  async create(entity: any): Promise<Pessoa> {
    const pessoa = await this.repository.create(entity);

    return pessoa;
  }

  async update(id: number, entity: any): Promise<Pessoa> {
    const pessoa = await this.repository.update(id, entity);

    return pessoa;
  }

  async delete(id: number): Promise<Pessoa> {
    const pessoa = await this.repository.delete(id);

    return pessoa;
  }

  async listAll(): Promise<Pessoa[]> {
    const pessoas = await this.repository.listAll();

    return pessoas;
  }

  async findById(id: number): Promise<Pessoa | null> {
    const pessoa = await this.repository.findById(id);

    return pessoa;
  }

  async findByName(name: string): Promise<Pessoa[]> {
    const pessoas = await this.repository.findByName(name);

    return pessoas;
  }
}
