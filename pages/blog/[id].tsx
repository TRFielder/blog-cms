// Utility imports
import {
  getAllArticles,
  getArticleByID,
  publishArticle,
  unpublishArticle,
} from "../../utils/api";
import { useEffect } from "react";
import { useRouter } from "next/router";

//Component imports
import Head from "next/head";
import BlogPost from "../../components/BlogPost";

// Type imports
import type { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import ArticleType from "../../types/ArticleType";

//Style imports
import styles from "../../styles/Blog.module.css";
import buttonStyle from "../../styles/Button.module.css";

const Article: NextPage<ArticleType> = (props: ArticleType) => {
  const router = useRouter();
  useEffect(() => {
    if (
      !(localStorage.getItem("isUserAuth") && localStorage.getItem("token"))
    ) {
      router.push("/");
    }
  }, []);

  const handlePublish = () => {
    console.log(`Publishing article with id: ${props._id}`);
    publishArticle(props._id as string).then((result) => console.log(result));
    router.push(`/blog`);
  };

  const handleUnpublish = () => {
    unpublishArticle(props._id as string);
    router.push(`/blog`);
  };

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <BlogPost
          title={props.title}
          author={props.author}
          text={props.text}
          published={props.published}
        />
        {props.published ? (
          <button className={buttonStyle.button} onClick={handleUnpublish}>
            Unpublish
          </button>
        ) : (
          <button className={buttonStyle.button} onClick={handlePublish}>
            Publish
          </button>
        )}
      </section>
    </>
  );
};

export default Article;

// Static page generation using the route param [id] (article ID)
export async function getServerSideProps({ params }: Params) {
  const article = await getArticleByID(params.id);
  return {
    props: {
      _id: params.id,
      title: article.title,
      author: article.author,
      text: article.text,
      published: article.published,
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
