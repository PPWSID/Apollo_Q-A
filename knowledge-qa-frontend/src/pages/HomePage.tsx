import { useQuery, gql } from '@apollo/client';

const GET_QUESTIONS = gql`
  query GetQuestions {
    questions {
      id
      content
      tags
    }
  }
`;

export default function HomePage() {
  const { data, loading, error } = useQuery(GET_QUESTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>📚 คำถามทั้งหมด</h2>
      <ul>
        {data.questions.map((q: any) => (
          <li key={q.id}>
            <strong>{q.content}</strong>
            <div>Tags: {q.tags.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
