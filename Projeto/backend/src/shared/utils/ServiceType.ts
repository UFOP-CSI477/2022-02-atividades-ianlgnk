// E = entity type
export type Service<E> = {
  create(entity: any): Promise<E>;
  update(id: number, entity: any): Promise<E>;
  delete(id: number): Promise<E>;
  listAll(): Promise<E[]>;
  findByPk(id: number): Promise<E | null>;
};
