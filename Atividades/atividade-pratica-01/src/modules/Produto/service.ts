import { Produto } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { ProdutoRepository } from "./repository";

export class ProdutoService implements Service<Produto> {
  private repository: ProdutoRepository = new ProdutoRepository();

  async create(entity: any): Promise<Produto> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<Produto> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<Produto> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<Produto[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findById(id: number): Promise<Produto | null> {
    const item = await this.repository.findById(id);

    return item;
  }
}
