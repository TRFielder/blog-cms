// Utility imports
import { getAllArticles, getAuthorByID } from "../../../utils/api";
import { useState } from "react";

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

  //Form event handlers
  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeText = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`${title}: ${text}`);
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
