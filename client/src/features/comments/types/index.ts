export interface Comment {
  id: string;
  content: string;
  author: string;
  entityId: string;
  entityType: Entity;
  createdAt: string;
}

export enum Entity {
  book = 'Book',
}
