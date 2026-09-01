import { apiSnippet, apiTopics } from '../../data';

export function ApiSection() {
  return (
    <section className="feature" id="api">
      <div className="feature__grid">
        <div>
          <h2>Developer ready</h2>
          <p className="muted">Fully featured & easy to use API system for developers.</p>
          <ul className="topic-list">
            {apiTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
        <pre className="code-block">
          <code>{apiSnippet}</code>
        </pre>
      </div>
    </section>
  );
}
