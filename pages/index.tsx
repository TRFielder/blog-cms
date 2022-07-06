// Utility imports
import { login } from "../utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//Component imports
import Head from "next/head";
import Link from "next/link";

// Type imports
import type { NextPage } from "next";

//Style imports
import styles from "../../styles/Blog.module.css";

const LoginForm: NextPage = () => {
  const router = useRouter();
  const [Auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("isUserAuth");
    if (user) {
      setAuth(true);
    }
  }, []);

  //Form handlers
  const handleChangeUser = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handleChangePasswordEntry = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "") {
      alert("Please enter username");
    }
    if (password === "") {
      alert("Please enter password");
    }
    login(username, password);
    router.push("/blog");
  };

  return (
    <>
      <Head>
        <title>Blog CMS</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <article>
          <form onSubmit={handleSubmit} action="" id="login">
            <div className="formGroup">
              <label htmlFor="title">Username</label>
              <input
                type="text"
                required
                name="username"
                value={username}
                onChange={handleChangeUser}
                placeholder="Inspiring title"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="text">Password</label>
              <input
                type="password"
                required
                name="text"
                form="newpost"
                value={password}
                onChange={handleChangePasswordEntry}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </article>
      </section>
    </>
  );
};

export default LoginForm;
