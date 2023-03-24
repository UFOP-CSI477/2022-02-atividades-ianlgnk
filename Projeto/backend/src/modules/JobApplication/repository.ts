import { Repository } from "../../shared/utils/RepositoryType";
import Prisma from "../../shared/infra/prisma";
import { JobApplication } from "@prisma/client";

export class JobApplicationRepository
  implements Repository<number, JobApplication>
{
  async create(entity: JobApplication): Promise<JobApplication> {
    const item = await Prisma.jobApplication.create({
      data: { ...entity },
    });

    return item;
  }

  async update(id: number, entity: JobApplication): Promise<JobApplication> {
    const item = await Prisma.jobApplication.update({
      where: { id: id },
      data: { ...entity },
    });

    return item;
  }

  async delete(id: number): Promise<JobApplication> {
    const item = await Prisma.jobApplication.delete({
      where: { id: id },
    });

    return item;
  }

  async listAll(): Promise<JobApplication[]> {
    const itens = await Prisma.jobApplication.findMany();

    return itens;
  }

  async findByPk(id: number): Promise<JobApplication | null> {
    const item = await Prisma.jobApplication.findUnique({
      where: { id: id },
    });

    return item;
  }

  async findByJobPostId(jobPostId: number): Promise<any> {
    const itens = await Prisma.jobApplication.findMany({
      where: { jobPostId: jobPostId },
      select: {
        id: false,
        createdAt: false,
        jobPost: false,
        jobPostId: false,
        updatedAt: false,
        userId: false,
        user: true,
      },
    });

    return itens;
  }

  async findByJobAndUserId(jobPostId: number, userId: number): Promise<any[]> {
    const item = await Prisma.jobApplication.findMany({
      where: {
        userId: userId,
        jobPostId: jobPostId,
      },
    });

    return item;
  }

  async findByUserId(userId: number): Promise<any[]> {
    const item = await Prisma.jobApplication.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        createdAt: false,
        jobPost: {
          select: {
            id: true,
            company: true,
            title: true,
            description: true,
          },
        },
        jobPostId: false,
        updatedAt: false,
        userId: false,
        user: false,
      },
    });

    return item;
  }
}
