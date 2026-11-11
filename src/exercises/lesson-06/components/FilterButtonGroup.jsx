const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
];

export default function FilterButtonGroup({ currentFilter, onFilterChange }) {
  return (
    <div>
      {filterOptions.map((option) => (
        <button key={option.value} onClick={() => onFilterChange(option.value)}>
          {option.label}
        </button>
      ))}
      <p>Current filter: {currentFilter}</p>
    </div>
  );
}
