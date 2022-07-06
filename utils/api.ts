// Functions to access blog API go here

//Type imports
import { userInfo } from "os";
import ArticleType from "../types/ArticleType";

//API domain is in .env for convenience

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

const login = async (username: string, password: string) => {
  const user = { username, password };
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/author/login`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    },
  );
  const response = await request.json();
  if (request.status !== 200) {
    console.log("Login failed");
    return false;
  }
  localStorage.setItem("token", response.token);
  localStorage.setItem("userIsAuth", true.toString());
  localStorage.setItem("ID", response.author._id);
  console.log("Logged in");
  return true;
};

const newArticle = async (title: string, text: string, author: string) => {
  const article = JSON.stringify({ title, text, author });
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`, {
    method: "POST",
    body: article,
    headers: { "Content-Type": "application/json" },
  });
};

export { getAuthorByID, getArticleByID, getAllArticles, login };
