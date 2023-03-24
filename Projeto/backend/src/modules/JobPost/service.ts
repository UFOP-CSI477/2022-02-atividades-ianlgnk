import { JobPost } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { JobPostRepository } from "./repository";

export class JobPostService implements Service<JobPost> {
  private repository: JobPostRepository = new JobPostRepository();

  async create(entity: any): Promise<JobPost> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<JobPost> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<JobPost> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<JobPost[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findByPk(id: number): Promise<JobPost | null> {
    const item = await this.repository.findByPk(id);

    return item;
  }

  async findByCompanyId(companyId: number): Promise<JobPost[]> {
    const item = await this.repository.findByCompanyId(companyId);

    return item;
  }
}
