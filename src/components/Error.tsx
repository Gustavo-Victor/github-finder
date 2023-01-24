import styles from "../styles/modules/Error.module.scss";

function Error() {
  return (
    <div className={styles.error_div}>
      <p>User not found :(</p>
    </div>
  );
}

export default Error;
