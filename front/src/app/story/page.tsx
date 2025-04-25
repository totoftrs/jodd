import '../styles/story.scss';
import data from '../../../data.json';
import Link from 'next/link';

export default function Story() {
  const test = data.story;
  return (
    <div className="content-story">
      <h2>Jod<span>i</span></h2>
      {test.map((elem) => {
        return (
          <Link
            href={`/story/${elem.id}`}
            key={elem.id}>
            <div className="container">
              <div className="commune">{elem.commune}</div>
              <div className="text">{elem.text.substring(0, 55)}...</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
