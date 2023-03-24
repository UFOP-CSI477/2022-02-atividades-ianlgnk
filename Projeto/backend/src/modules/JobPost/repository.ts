import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { JobPost } from "@prisma/client";

export class JobPostRepository implements Repository<number, JobPost> {
  async create(entity: JobPost): Promise<JobPost> {
    const item = await Prisma.jobPost.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: JobPost): Promise<JobPost> {
    const item = await Prisma.jobPost.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<JobPost> {
    const item = await Prisma.jobPost.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<any[]> {
    const itens = await Prisma.jobPost.findMany({
      select: {
        id: true,
        companyId: true,
        company: true,
        description: true,
        title: true,
      },
    });

    return itens;
  }

  async findByPk(id: number): Promise<JobPost | null> {
    const item = await Prisma.jobPost.findUnique({
      where: { id: id },
    });

    return item;
  }

  async findByCompanyId(companyId: number): Promise<any[]> {
    const item = await Prisma.jobPost.findMany({
      where: {
        companyId: companyId,
      },
      select: {
        id: true,
        companyId: true,
        company: true,
        description: true,
        title: true,
      },
    });

    return item;
  }
}
