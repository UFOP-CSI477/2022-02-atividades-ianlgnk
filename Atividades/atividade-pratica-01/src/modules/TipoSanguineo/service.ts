import { TipoSanguineo } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { TipoSanguineoRepository } from "./repository";

export class TipoSanguineoService implements Service<TipoSanguineo> {
  private repository: TipoSanguineoRepository = new TipoSanguineoRepository();

  async create(entity: any): Promise<TipoSanguineo> {
    const tipoSanguineo = await this.repository.create(entity);

    return tipoSanguineo;
  }

  async update(id: number, entity: any): Promise<TipoSanguineo> {
    const tipoSanguineo = await this.repository.update(id, entity);

    return tipoSanguineo;
  }

  async delete(id: number): Promise<TipoSanguineo> {
    const tipoSanguineo = await this.repository.delete(id);

    return tipoSanguineo;
  }

  async listAll(): Promise<TipoSanguineo[]> {
    const tiposSanguineos = await this.repository.listAll();

    return tiposSanguineos;
  }

  async findById(id: number): Promise<TipoSanguineo | null> {
    const tipoSanguineo = await this.repository.findById(id);

    return tipoSanguineo;
  }
}
