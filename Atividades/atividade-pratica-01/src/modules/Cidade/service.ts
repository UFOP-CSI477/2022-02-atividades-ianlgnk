import { Cidade } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { CidadeRepository } from "./repository";

export class CidadeService implements Service<Cidade> {
  private repository: CidadeRepository = new CidadeRepository();

  async create(entity: any): Promise<Cidade> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Cidade> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Cidade> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Cidade[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<Cidade | null> {
    const item = await this.repository.findById(id);

    return item;
  }

  async findByName(name: string): Promise<Cidade[]> {
    const itens = await this.repository.findByName(name);

    return itens;
  }
}
