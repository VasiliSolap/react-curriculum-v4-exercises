//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Vasili Solap';
  const age = 43;
  const hobbies = ['coding', 'games', 'food'];

  return (
    <div>
      <h1> This is a short story about {name}</h1>
      <p>
        {' '}
        {name} is {age} years old and enjoys:{' '}
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
