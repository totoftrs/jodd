'use client';

import { useParams } from 'next/navigation';
import data from '../../../../data.json';
import "../../styles/story.scss"

export default function Story() {
  const navigate = useParams();
  const content = data.story;
  const t = content.find((elem) => elem.id === Number(navigate.id));
  return (
    <div className='article'>
      <div className="title">{t?.title}</div>
      <div className="text">{t?.text}</div>
      <div className='commune'>{t?.commune}</div>
    </div>
  );
}
