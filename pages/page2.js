// pages/page2.js
import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useRouter } from "next/router";
import styles from "../styles/Page2.module.css"; // Import the CSS module

const Page2 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const router = useRouter();
  const [expanded, setExpanded] = useState({
    socialSupport: false,
    communityEngagement: false,
    relationshipSatisfaction: false,
    loneliness: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBack = () => {
    router.push("/page1");
  };

  const handleNext = () => {
    router.push("/page3");
  };

  const toggleDropdown = (field) => {
    setExpanded((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Page 2</h1>
        <div className={styles.form}>
          <div className={styles.inputField}>
            <label className={styles.label}>Social Support:</label>
            <div className={styles.drop}>
              <button
                className={styles.drop__btn}
                aria-expanded={expanded.socialSupport}
                onClick={() => toggleDropdown("socialSupport")}
              >
                {formData.socialSupport || "Select an option"}
              </button>
              {expanded.socialSupport && (
                <div className={styles.drop__items}>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "socialSupport", value: "1" },
                      });
                      toggleDropdown("socialSupport");
                    }}
                  >
                    Never
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "socialSupport", value: "2" },
                      });
                      toggleDropdown("socialSupport");
                    }}
                  >
                    Rarely
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "socialSupport", value: "3" },
                      });
                      toggleDropdown("socialSupport");
                    }}
                  >
                    Sometimes
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "socialSupport", value: "4" },
                      });
                      toggleDropdown("socialSupport");
                    }}
                  >
                    Often
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "socialSupport", value: "5" },
                      });
                      toggleDropdown("socialSupport");
                    }}
                  >
                    Always
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.inputField}>
            <label className={styles.label}>Community Engagement:</label>
            <div className={styles.drop}>
              <button
                className={styles.drop__btn}
                aria-expanded={expanded.communityEngagement}
                onClick={() => toggleDropdown("communityEngagement")}
              >
                {formData.communityEngagement || "Select an option"}
              </button>
              {expanded.communityEngagement && (
                <div className={styles.drop__items}>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "communityEngagement", value: "1" },
                      });
                      toggleDropdown("communityEngagement");
                    }}
                  >
                    Never
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "communityEngagement", value: "2" },
                      });
                      toggleDropdown("communityEngagement");
                    }}
                  >
                    Rarely
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "communityEngagement", value: "3" },
                      });
                      toggleDropdown("communityEngagement");
                    }}
                  >
                    Sometimes
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "communityEngagement", value: "4" },
                      });
                      toggleDropdown("communityEngagement");
                    }}
                  >
                    Often
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "communityEngagement", value: "5" },
                      });
                      toggleDropdown("communityEngagement");
                    }}
                  >
                    Always
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.inputField}>
            <label className={styles.label}>Relationship Satisfaction:</label>
            <div className={styles.drop}>
              <button
                className={styles.drop__btn}
                aria-expanded={expanded.relationshipSatisfaction}
                onClick={() => toggleDropdown("relationshipSatisfaction")}
              >
                {formData.relationshipSatisfaction || "Select an option"}
              </button>
              {expanded.relationshipSatisfaction && (
                <div className={styles.drop__items}>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: {
                          name: "relationshipSatisfaction",
                          value: "1",
                        },
                      });
                      toggleDropdown("relationshipSatisfaction");
                    }}
                  >
                    Very dissatisfied
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: {
                          name: "relationshipSatisfaction",
                          value: "2",
                        },
                      });
                      toggleDropdown("relationshipSatisfaction");
                    }}
                  >
                    Dissatisfied
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: {
                          name: "relationshipSatisfaction",
                          value: "3",
                        },
                      });
                      toggleDropdown("relationshipSatisfaction");
                    }}
                  >
                    Neutral
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: {
                          name: "relationshipSatisfaction",
                          value: "4",
                        },
                      });
                      toggleDropdown("relationshipSatisfaction");
                    }}
                  >
                    Satisfied
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: {
                          name: "relationshipSatisfaction",
                          value: "5",
                        },
                      });
                      toggleDropdown("relationshipSatisfaction");
                    }}
                  >
                    Very satisfied
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.inputField}>
            <label className={styles.label}>Loneliness:</label>
            <div className={styles.drop}>
              <button
                className={styles.drop__btn}
                aria-expanded={expanded.loneliness}
                onClick={() => toggleDropdown("loneliness")}
              >
                {formData.loneliness || "Select an option"}
              </button>
              {expanded.loneliness && (
                <div className={styles.drop__items}>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "loneliness", value: "1" },
                      });
                      toggleDropdown("loneliness");
                    }}
                  >
                    Never
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "loneliness", value: "2" },
                      });
                      toggleDropdown("loneliness");
                    }}
                  >
                    Rarely
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "loneliness", value: "3" },
                      });
                      toggleDropdown("loneliness");
                    }}
                  >
                    Sometimes
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "loneliness", value: "4" },
                      });
                      toggleDropdown("loneliness");
                    }}
                  >
                    Often
                  </button>
                  <button
                    className={styles.drop__btn}
                    onClick={() => {
                      handleChange({
                        target: { name: "loneliness", value: "5" },
                      });
                      toggleDropdown("loneliness");
                    }}
                  >
                    Always
                  </button>
                </div>
              )}
            </div>
          </div>
          <button onClick={handleBack} className={styles.button}>
            Back
          </button>
          <button onClick={handleNext} className={styles.button}>
            Next
          </button>
        </div>
      </div>
      <div className={styles.gifContainer}>
        <img
          src="/path/to/your/gif.gif"
          alt="Decorative GIF"
          className={styles.gif}
        />
      </div>
    </div>
  );
};

export default Page2;
