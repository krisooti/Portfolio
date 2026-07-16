type ResultsGridProps = {
  results: string[];
  learnings: string[];
};

export function ResultsGrid({ results, learnings }: ResultsGridProps) {
  return (
    <div className="project-results-grid">
      <div>
        <h3>Results</h3>
        <ul>
          {results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Learnings</h3>
        <ul>
          {learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
