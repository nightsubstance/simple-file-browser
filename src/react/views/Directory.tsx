import React from 'react';
import { useParams } from 'react-router-dom';

export function Directory() {
  const params = useParams<'name'>();

  return <div>Directory: {params.name}</div>;
}
