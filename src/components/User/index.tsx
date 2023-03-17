import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function User({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <div className={styles.user_div}>
      <img alt={login} title={login} src={avatar_url} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Followers</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
      <Link className={styles.link} to={`/repos/${login}`}>
        Repositories
      </Link>
    </div>
  );
}

export default User;
