import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile();
      setProfile(data);
    }

    loadProfile();
  }, []);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{profile.name}</h1>

      <h2>{profile.role}</h2>

      <p>{profile.summary}</p>

      <p><strong>Location:</strong> {profile.location}</p>
    </div>
  );
}

export default Home;