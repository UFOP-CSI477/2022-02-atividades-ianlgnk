import { Doacao } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { DoacaoRepository } from "./repository";

export class DoacaoService implements Service<Doacao> {
  private repository: DoacaoRepository = new DoacaoRepository();

  async create(entity: any): Promise<Doacao> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Doacao> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Doacao> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Doacao[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<Doacao | null> {
    const item = await this.repository.findById(id);

    return item;
  }
}
