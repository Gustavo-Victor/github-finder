import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./style.module.scss";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.back_btn} onClick={() => navigate(-1)}>
        <FaArrowLeft/>
      </button>
    </>
  );
}

export default BackBtn;
