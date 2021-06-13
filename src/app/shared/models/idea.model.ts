export class Idea {
  id: number;
  title: string;
  description: string;
  benefits: string;
  likes: string;
  createdOn: string;
  status: string;
  departmentId: number;
  departmentName: string;
  authorId: number;
  authorName: string;
  actions: {
    teacher: {
      id: string;
      comment: string;
      date: string;
    };
    hod: {
      id: string;
      comment: string;
      date: string;
    };
    admin: {
      id: string;
      comment: string;
      date: string;
    };
  };

  constructor() {
    this.id = null;
    this.title = null;
    this.description = null;
    this.benefits = null;
    this.likes = null;
    this.createdOn = null;
    this.status = null;
    this.departmentId = null;
    this.departmentName = null;
    this.authorId = null;
    this.authorName = null;
    this.actions = {
      teacher: {
        id: '',
        comment: '',
        date: '',
      },
      hod: {
        id: '',
        comment: '',
        date: '',
      },
      admin: {
        id: '',
        comment: '',
        date: '',
      },
    };
  }
}
