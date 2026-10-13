function SnackList() {
  const snacks = [
    { name: 'Chips', rank: 5 },
    { name: 'Cookies', rank: 4 },
    { name: 'Chocolate', rank: 3 },
    { name: 'Ice Cream', rank: 2 },
    { name: 'Jerky', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ul>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} : {snack.rank}
        </li>
      ))}
    </ul>
  );
}

export default SnackList;
