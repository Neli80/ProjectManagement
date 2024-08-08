import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useRouter } from "next/router";
import styles from "../styles/Page1.module.css";

const Page1 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    router.push("/page2");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Demographic Information</h1>
        <form className={styles.form}>
          <div className={styles.inputField}>
            <input
              type="number"
              name="age"
              value={formData.age || ""}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <label className={styles.label}>Age:</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <label className={styles.label}>Gender:</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="occupation"
              value={formData.occupation || ""}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <label className={styles.label}>Occupation:</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus || ""}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <label className={styles.label}>Marital Status:</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="livingSituation"
              value={formData.livingSituation || ""}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <label className={styles.label}>Living Situation:</label>
          </div>
          <button type="button" onClick={handleNext} className={styles.button}>
            Next
          </button>
        </form>
      </div>
      <div className={styles.gifContainer}>
        <img
          src="/images/82eb0e1d6bea3ea0627a897f9bb8eb15.gif"
          alt="Motivational GIF"
          className={styles.gif}
        />
      </div>
    </div>
  );
};

export default Page1;
