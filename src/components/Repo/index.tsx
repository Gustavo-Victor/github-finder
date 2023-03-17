import { RepoProps } from "../../types/repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import styles from "./style.module.scss";

function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) {
  return (
    <div className={styles.repo}>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className={styles.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={styles.repo_btn}>
        <span>See code</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
}

export default Repo;
