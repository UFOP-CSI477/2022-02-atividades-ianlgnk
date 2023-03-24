import { JobApplication } from "@prisma/client";
import { Service } from "../../shared/utils/ServiceType";
import { JobApplicationRepository } from "./repository";

export class JobApplicationService implements Service<JobApplication> {
  private repository: JobApplicationRepository = new JobApplicationRepository();

  async create(entity: any): Promise<JobApplication> {
    const item = await this.repository.create(entity);

    return item;
  }

  async update(id: number, entity: any): Promise<JobApplication> {
    const item = await this.repository.update(id, entity);

    return item;
  }

  async delete(id: number): Promise<JobApplication> {
    const item = await this.repository.delete(id);

    return item;
  }

  async listAll(): Promise<JobApplication[]> {
    const itens = await this.repository.listAll();

    return itens;
  }

  async findByPk(id: number): Promise<JobApplication | null> {
    const item = await this.repository.findByPk(id);

    return item;
  }

  async findByJobPostId(id: number): Promise<any> {
    const itens = await this.repository.findByJobPostId(id);

    return itens;
  }

  async findByJobAndUserId(jobPostId: number, userId: number): Promise<any[]> {
    const item = await this.repository.findByJobAndUserId(jobPostId, userId);

    return item;
  }

  async findByUserId(userId: number): Promise<any[]> {
    const item = this.repository.findByUserId(userId);

    return item;
  }
}
