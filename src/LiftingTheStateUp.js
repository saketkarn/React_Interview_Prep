import React, { useState } from 'react';

function ParentComponent() {
  const [sharedData, setSharedData] = useState("Initial Data");

  return (
    <div>
      <h1>Parent Component</h1>
      <SiblingComponent1 data={sharedData} />
      <SiblingComponent2 data={sharedData} updateData={setSharedData} />
    </div>
  );
}

function SiblingComponent1({ data }) {
  return (
    <div>
      <h2>Sibling 1</h2>
      <p>Data: {data}</p>
    </div>
  );
}

function SiblingComponent2({ data, updateData }) {
  return (
    <div>
      <h2>Sibling 2</h2>
      <p>Data: {data}</p>
      <button onClick={() => updateData("Updated Data from Sibling 2")}>
        Update Data
      </button>
    </div>
  );
}

export default ParentComponent;
