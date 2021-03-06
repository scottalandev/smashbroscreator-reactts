// import { sampleChars } from "../../seedData/sampleChars";

export function CharList({ chars, handleChange, stickyClass }) {
  const charNames = chars.map((char, index) => (
    <option key={index} value={index}>
      {char.name}
    </option>
  ));

  return (
    <div className={`sidebar ${stickyClass}`}>
      <h3>Character List</h3>
      <select className="listbox" defaultValue={0} size={2} onChange={handleChange}>
        {charNames}
      </select>
    </div>
  );
}

// export function CharList({ })