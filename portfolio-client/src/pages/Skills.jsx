import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function loadSkills() {
      const data = await getProfile();
      setSkills(data.skills);
    }

    loadSkills();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Skills</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;