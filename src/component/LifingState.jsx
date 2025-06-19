import { useState } from "react";
import ParentWizard from "./FormWizard";

function ParentComponent() {
  const [name, setName] = useState("");

  return (
    <div>
      <NameInput name={name} setName={setName} />
      <NameDisplay name={name} />
      <ParentWizard />
    </div>
  );
}

function NameInput({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type your name"
    />
  );
}

function NameDisplay({ name }) {
  return <h2>Your name is: {name}</h2>;
}


export default ParentComponent;