import { openDB } from "../../lib/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await openDB();
    const { formData } = req.body;

    try {
      await db.run(
        `
        INSERT INTO answers (username, age, gender, occupation, maritalStatus, livingSituation, socialSupport, communityEngagement, relationshipSatisfaction, loneliness, mood, anxiety, sleepQuality, energyLevels, concentration, enjoymentOfLife)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [
          formData.username,
          formData.age,
          formData.gender,
          formData.occupation,
          formData.maritalStatus,
          formData.livingSituation,
          formData.socialSupport,
          formData.communityEngagement,
          formData.relationshipSatisfaction,
          formData.loneliness,
          formData.mood,
          formData.anxiety,
          formData.sleepQuality,
          formData.energyLevels,
          formData.concentration,
          formData.enjoymentOfLife,
        ]
      );

      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Error saving data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
