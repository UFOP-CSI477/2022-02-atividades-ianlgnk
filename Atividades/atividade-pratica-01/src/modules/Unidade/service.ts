import { Unidade } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { UnidadeRepository } from "./repository";

export class UnidadeService implements Service<Unidade> {
  private repository: UnidadeRepository = new UnidadeRepository();

  async create(entity: any): Promise<Unidade> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Unidade> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Unidade> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Unidade[]> {
    const item = await this.repository.listAll();

    return item;
  }

  async findById(id: number): Promise<Unidade | null> {
    const itens = await this.repository.findById(id);

    return itens;
  }

  async findByName(name: string): Promise<Unidade[]> {
    const itens = await this.repository.findByName(name);

    return itens;
  }
}
