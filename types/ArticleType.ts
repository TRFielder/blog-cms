import AuthorType from "./AuthorType";

type ArticleType = {
  _id?: string;
  title: string;
  author: AuthorType;
  text: string;
  comments?: Array<string>;
  published?: boolean;
};

export default ArticleType;
