import { Cidade } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { CidadeRepository } from "./repository";

export class CidadeService implements Service<Cidade> {
  private repository: CidadeRepository = new CidadeRepository();

  async create(entity: any): Promise<Cidade> {
    const cidade = await this.repository.create(entity);

    return cidade;
  }

  async update(id: number, entity: any): Promise<Cidade> {
    const cidade = await this.repository.update(id, entity);

    return cidade;
  }

  async delete(id: number): Promise<Cidade> {
    const cidade = await this.repository.delete(id);

    return cidade;
  }

  async listAll(): Promise<Cidade[]> {
    const cidades = await this.repository.listAll();

    return cidades;
  }

  async findById(id: number): Promise<Cidade | null> {
    const cidade = await this.repository.findById(id);

    return cidade;
  }

  async findByName(name: string): Promise<Cidade[]> {
    const cidades = await this.repository.findByName(name);

    return cidades;
  }
}
