// pages/page3.js
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useRouter } from "next/router";

const Page3 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/thank-you");
    } else {
      console.error("Failed to submit the form");
    }
  };

  const handleBack = () => {
    router.push("/page2");
  };

  return (
    <div>
      <h1>Mental Health</h1>
      <label>
        Mood:
        <select name="mood" value={formData.mood || ""} onChange={handleChange}>
          <option value="1">Not at all</option>
          <option value="2">Several days</option>
          <option value="3">More than half the days</option>
          <option value="4">Nearly every day</option>
        </select>
      </label>
      <label>
        Anxiety:
        <select
          name="anxiety"
          value={formData.anxiety || ""}
          onChange={handleChange}
        >
          <option value="1">Not at all</option>
          <option value="2">Several days</option>
          <option value="3">More than half the days</option>
          <option value="4">Nearly every day</option>
        </select>
      </label>
      <label>
        Sleep Quality:
        <select
          name="sleepQuality"
          value={formData.sleepQuality || ""}
          onChange={handleChange}
        >
          <option value="1">Very poor</option>
          <option value="2">Poor</option>
          <option value="3">Fair</option>
          <option value="4">Good</option>
          <option value="5">Very good</option>
        </select>
      </label>
      <label>
        Energy Levels:
        <select
          name="energyLevels"
          value={formData.energyLevels || ""}
          onChange={handleChange}
        >
          <option value="1">Never</option>
          <option value="2">Rarely</option>
          <option value="3">Sometimes</option>
          <option value="4">Often</option>
          <option value="5">Always</option>
        </select>
      </label>
      <label>
        Concentration:
        <select
          name="concentration"
          value={formData.concentration || ""}
          onChange={handleChange}
        >
          <option value="1">Never</option>
          <option value="2">Rarely</option>
          <option value="3">Sometimes</option>
          <option value="4">Often</option>
          <option value="5">Always</option>
        </select>
      </label>
      <label>
        Enjoyment of Life:
        <select
          name="enjoymentOfLife"
          value={formData.enjoymentOfLife || ""}
          onChange={handleChange}
        >
          <option value="1">Never</option>
          <option value="2">Rarely</option>
          <option value="3">Sometimes</option>
          <option value="4">Often</option>
          <option value="5">Always</option>
        </select>
      </label>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Page3;
