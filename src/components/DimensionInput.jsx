import React from 'react';

export default function DimensionInput({ change }) {
  return (
    <div>
      <input type="text" onChange={(e) => change(e.target.value)} />
    </div>
  );
}
