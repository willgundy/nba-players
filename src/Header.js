import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link className='headerItem' to={'/'}>
            NBA Players
      </Link>
      <Link className='headerItem' to={'/teams'}>
            NBA Teams
      </Link>
    </div>
  );
}
