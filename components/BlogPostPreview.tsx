// Utility imports

//Component imports
import Link from "next/link";

// Type imports
import ArticleType from "../types/ArticleType";

//Style imports
import styles from "../styles/Blog.module.css";

const BlogPostPreview: React.FC<ArticleType> = (props: ArticleType) => {
  return (
    <section>
      <article className={styles.blogPreviewContainer}>
        <Link href={`/blog/${props._id}`}>
          <a className={styles.blogPostTitle}>{props.title}</a>
        </Link>
        <p>{props.published ? "Published" : "Unpublished"}</p>
        <p>
          {props.author.first_name} {props.author.last_name}
        </p>
      </article>
    </section>
  );
};

export default BlogPostPreview;
