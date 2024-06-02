import { useState } from "react";

function UserDetails() {
  const [name, setName] = useState("");
  const [surrname, setSurrname] = useState("");
  const [job, setJob] = useState("");

  const [header, setHeader] = useState("");
  const [paragraph, setParagraph] = useState("");

  function saveDetails() {
    setHeader(`${name} ${surrname}`);
    setParagraph(job);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          className="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your first name"
        />
        <input
          type="text"
          className="surrnameInput"
          value={surrname}
          onChange={(e) => setSurrname(e.target.value)}
          placeholder="Enter your surname"
        />
        <input
          type="text"
          className="jobInput"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="What's your profession?"
        />
      </div>
      <button className="Submit" onClick={saveDetails}>
        Submit
      </button>
      <h1 className="nameHeader">{header}</h1>
      <p className="jobParagraph">{paragraph}</p>
    </div>
  );
}

export default UserDetails;
