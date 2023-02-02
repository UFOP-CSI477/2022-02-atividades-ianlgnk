import { TipoSanguineo } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { TipoSanguineoRepository } from "./repository";

export class TipoSanguineoService implements Service<TipoSanguineo> {
  private repository: TipoSanguineoRepository = new TipoSanguineoRepository();

  async create(entity: any): Promise<TipoSanguineo> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<TipoSanguineo> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<TipoSanguineo> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<TipoSanguineo[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<TipoSanguineo | null> {
    const item = await this.repository.findById(id);

    return item;
  }
}
