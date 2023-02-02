import { LocalColeta } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { LocalColetaRepository } from "./repository";

export class LocalColetaService implements Service<LocalColeta> {
  private repository: LocalColetaRepository = new LocalColetaRepository();

  async create(entity: any): Promise<LocalColeta> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<LocalColeta> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<LocalColeta> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<LocalColeta[]> {
    const item = await this.repository.listAll();

    return item;
  }

  async findById(id: number): Promise<LocalColeta | null> {
    const itens = await this.repository.findById(id);

    return itens;
  }

  async findByName(name: string): Promise<LocalColeta[]> {
    const itens = await this.repository.findByName(name);

    return itens;
  }
}
