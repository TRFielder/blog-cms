// Utility imports
import { newArticle } from "../../../utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//Component imports
import Head from "next/head";
import Link from "next/link";
import BlogPostPreview from "../../../components/BlogPostPreview";

// Type imports
import ArticleArrayType from "../../../types/ArticleArrayType";
import type { NextPage } from "next";
import React from "react";

const Form: NextPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (
      !(localStorage.getItem("isUserAuth") && localStorage.getItem("token"))
    ) {
      router.push("/");
    }
  }, []);

  //Form event handlers
  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeText = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ID = localStorage.getItem("ID");
    newArticle(title, text, ID as string);
    router.push("/blog");
  };
  return (
    <>
      <Head>
        <title>New Article</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <article>
          <form onSubmit={handleSubmit} action="" id="newpost">
            <div className="formGroup">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
                placeholder="Inspiring title"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="text">Article Text</label>
              <textarea
                name="text"
                form="newpost"
                value={text}
                onChange={handleChangeText}
                placeholder="Inspiring text"
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </article>
      </section>
    </>
  );
};

export default Form;
