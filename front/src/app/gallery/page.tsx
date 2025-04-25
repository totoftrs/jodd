'use client';

import Image from 'next/image';
import data from '../../../data.json';
import Link from 'next/link';
import "../styles/gallery.scss"

export default function Home() {
  const content = data.gallery;
  // <Image
  //   src="/next.svg"
  //   alt="Next.js logo"
  //   width={180}
  //   height={38}
  //   priority
  // />;

  const card = () => {
    return;
  };

  return (
    <div className="content">
      {content.map((elem) => {
        return (
          <Link
            href={`/card/${elem.id}`}
            className="container-img"
            key={elem.id}>
            {elem.img !== '' && <img src={elem.img} />}
            {elem.video && (
              <video
                src={elem.video}
                autoPlay
                muted
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
