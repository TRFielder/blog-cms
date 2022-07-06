// Utility imports
import { getAllArticles, getAuthorByID } from "../utils/api";

//Component imports
import Head from "next/head";
import Link from "next/link";

// Type imports
import type { NextPage } from "next";

//Style imports
import styles from "../../styles/Blog.module.css";

const LoginForm: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog CMS</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <article>
          <main>
            <Link href="/blog">Go to the blog</Link>
          </main>
        </article>
      </section>
    </>
  );
};

export default LoginForm;
