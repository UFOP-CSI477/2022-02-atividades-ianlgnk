import { Estado } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { EstadoRepository } from "./repository";

export class EstadoService implements Service<Estado> {
  private repository: EstadoRepository = new EstadoRepository();

  async create(entity: any): Promise<Estado> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Estado> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Estado> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Estado[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<Estado | null> {
    const item = await this.repository.findById(id);

    return item;
  }

  async findByName(name: string): Promise<Estado[]> {
    const itens = await this.repository.findByName(name);

    return itens;
  }
}
