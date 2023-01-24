import { RepoProps } from "../types/repo";

import Repo from "../components/Repo";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/modules/Repos.module.scss";

function Repos() {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();
      console.log(data);
      setLoading(false);

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );
      orderedRepos = orderedRepos.slice(0, 5);
      console.log(orderedRepos);
      setRepos(orderedRepos);
    };

    if (username) {
      loadRepos(username);
    }
  }, []);

  if (!repos && loading) return <Loader />;

  return (
    <div className={styles.repos}>
      <BackBtn />
      <h2>Explore the user's repositories: </h2>
      {repos && repos.length === 0 && (
        <p>This user has no repositories yet...</p>
      )}
      {repos && repos.length > 0 && (
        <div className={styles.repos_container}>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Repos;
