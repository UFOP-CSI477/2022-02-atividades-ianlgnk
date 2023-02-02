import { Pessoa } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { PessoaRepository } from "./repository";

export class PessoaService implements Service<Pessoa> {
  private repository: PessoaRepository = new PessoaRepository();

  async create(entity: any): Promise<Pessoa> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Pessoa> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Pessoa> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Pessoa[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<Pessoa | null> {
    const item = await this.repository.findById(id);

    return item;
  }

  async findByName(name: string): Promise<Pessoa[]> {
    const itens = await this.repository.findByName(name);

    return itens;
  }
}
