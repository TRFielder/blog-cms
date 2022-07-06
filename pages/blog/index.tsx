// Utility imports
import { getAllArticles, getAuthorByID } from "../../utils/api";

//Component imports
import Head from "next/head";
import Link from "next/link";
import BlogPostPreview from "../../components/BlogPostPreview";

// Type imports
import ArticleArrayType from "../../types/ArticleArrayType";
import type { NextPage } from "next";

//Style imports
import styles from "../../styles/Blog.module.css";

const Blog: NextPage<ArticleArrayType> = (props: ArticleArrayType) => {
  return (
    <>
      <Head>
        <title>Blog CMS</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <article>
          <main className={styles.blogPreviewList}>
            {props.articles.map((article) => (
              <BlogPostPreview
                key={article._id}
                _id={article._id}
                author={article.author}
                title={article.title}
                text={article.text}
              />
            ))}
          </main>
          <Link href="/blog/new">
            <a>New Post</a>
          </Link>
        </article>
      </section>
    </>
  );
};

export default Blog;

export async function getStaticProps({}) {
  const articles = await getAllArticles();
  return {
    props: {
      articles,
    },
  };
}
