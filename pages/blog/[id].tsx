// Utility imports
import { getAllArticles, getArticleByID } from "../../utils/api";

//Component imports
import Head from "next/head";
import BlogPost from "../../components/BlogPost";

// Type imports
import type { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import ArticleType from "../../types/ArticleType";

//Style imports
import styles from "../../styles/Blog.module.css";

const Article: NextPage<ArticleType> = (props: ArticleType) => {
  return (
    <>
      <Head>
        <title>Tom Fielder: Blog</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPost title={props.title} author={props.author} text={props.text} />
    </>
  );
};

export default Article;

// Static page generation using the route param [id] (article ID)
export async function getStaticProps({ params }: Params) {
  const article = await getArticleByID(params.id);
  return {
    props: {
      title: article.title,
      author: article.author,
      text: article.text,
    },
  };
}
// Map out the possible dynamic routes based on the available articles in the database
export async function getStaticPaths() {
  const articles = await getAllArticles();

  const paths = articles.map((article: ArticleType) => {
    return {
      params: { id: article._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
