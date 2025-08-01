export interface ProductFeedback {
  currentUser: User,
  productRequests: Suggestion[],
}

// export interface 

export interface Suggestion {
  id: number | string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  user: User;
}

export interface User {
  image: string;
  name: string;
  username: string;
}

export interface ServerFeedback extends Omit<Suggestion, 'id'> {
  _id: string;
}