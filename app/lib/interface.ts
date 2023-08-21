export interface Post {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
    _modifiedAt: string;
  }

export interface Information {
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  _modifiedAt: string;
}

export interface Artists {
  title: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
}