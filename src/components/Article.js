// <Article>children</Article>
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Article(props) {
  const [likes, setLikes] = useState(0);
  function onLike() {
    // likes = likes + 1;
    setLikes(likes + 1);
    console.log("après setLikes", likes);
  }
  console.log('avant return', likes);
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
      <div>
        <span>{props.date}</span>
        <span>{props.author}</span>
        <Button variant="danger" onClick={onLike}>Like</Button>
        <span>Likes : {likes}</span>
      </div>
    </article>
  );
}

export default Article;