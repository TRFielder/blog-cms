// Functions to access blog API go here

//Type imports
import ArticleType from "../types/ArticleType";

//API domain is in .env for convenience
require("dotenv").config();

//GET methods

const getAuthorByID = async (AuthorID: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/author/${AuthorID}`,
  );
  const searchResult = await response.json();
  return searchResult;
};

const getArticleByID = async (ArticleID: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/article/${ArticleID}`,
  );
  const searchResult = await response.json();
  return searchResult;
};

const getAllArticles = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article/`);
  const searchResult = await response.json();

  return searchResult;
};

//POST methods

const newArticle = async (title: string, text: string, author: string) => {
  const article = JSON.stringify({ title, text, author });
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`, {
    method: "POST",
    body: article,
    headers: { "Content-Type": "application/json" },
  });
};

export { getAuthorByID, getArticleByID, getAllArticles };
