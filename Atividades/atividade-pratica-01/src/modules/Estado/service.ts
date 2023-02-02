import { Estado } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { EstadoRepository } from "./repository";

export class EstadoService implements Service<Estado> {
  private repository: EstadoRepository = new EstadoRepository();

  async create(entity: any): Promise<Estado> {
    const estado = await this.repository.create(entity);

    return estado;
  }

  async update(id: number, entity: any): Promise<Estado> {
    const estado = await this.repository.update(id, entity);

    return estado;
  }

  async delete(id: number): Promise<Estado> {
    const estado = await this.repository.delete(id);

    return estado;
  }

  async listAll(): Promise<Estado[]> {
    const estados = await this.repository.listAll();

    return estados;
  }

  async findById(id: number): Promise<Estado | null> {
    const estado = await this.repository.findById(id);

    return estado;
  }

  async findByName(name: string): Promise<Estado[]> {
    const estados = await this.repository.findByName(name);

    return estados;
  }
}
