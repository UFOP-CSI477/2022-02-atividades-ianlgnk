// PK = primary key type
// E  = entity type
export type Repository<PK, E> = {
  create(entity: E): Promise<E>;
  update(id: PK, entity: E): Promise<E>;
  delete(id: PK): Promise<E>;
  listAll(): Promise<E[]>;
  findById(id: PK): Promise<E | null>;
  findByName?(name: string): Promise<E[]>;
};
