export class Idea {
  id: number;
  title: string;
  description: string;
  benefits: string;
  likes: string;
  createdOn: string;
  hodComment: string;
  status: string;
  departmentId: number;
  departmentName: string;
  authorId: number;
  authorName: string;

  constructor() {
    this.id = null;
    this.title = null;
    this.description = null;
    this.benefits = null;
    this.likes = null;
    this.createdOn = null;
    this.hodComment = null;
    this.status = null;
    this.departmentId = null;
    this.departmentName = null;
    this.authorId = null;
    this.authorName = null;
  }
}
