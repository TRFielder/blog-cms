// Utility imports

//Component imports

// Type imports
import ArticleType from "../types/ArticleType";

//Style imports
import styles from "../styles/Blog.module.css";

const BlogPost: React.FC<ArticleType> = (props: ArticleType) => {
  return (
    <section>
      <article className={styles.blogContainer}>
        <h1 className={styles.blogPostTitle}>{props.title}</h1>
        <p>
          Author: {props.author.first_name} {props.author.last_name}
        </p>
        <p className={styles.blogText}>{props.text}</p>
      </article>
    </section>
  );
};

export default BlogPost;
