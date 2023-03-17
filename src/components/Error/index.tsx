import styles from "./style.module.scss";

function Error() {
  return (
    <div className={styles.error_div}>
      <p>User not found :(</p>
    </div>
  );
}

export default Error;
