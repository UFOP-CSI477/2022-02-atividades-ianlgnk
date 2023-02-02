import { Distribuicao } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { DistribuicaoRepository } from "./repository";

export class DistribuicaoService implements Service<Distribuicao> {
  private repository: DistribuicaoRepository = new DistribuicaoRepository();

  async create(entity: any): Promise<Distribuicao> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Distribuicao> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Distribuicao> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Distribuicao[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<Distribuicao | null> {
    const item = await this.repository.findById(id);

    return item;
  }
}
