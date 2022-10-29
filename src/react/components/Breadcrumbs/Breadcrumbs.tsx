import React, { useMemo } from 'react';
import Chip from '@mui/material/Chip';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { StringParam, useQueryParam } from 'use-query-params';

interface BreadcrumbsProps {
  rootName: string;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const [path = props.rootName, setPath] = useQueryParam('path', StringParam);

  const data = useMemo<{ name: string; path: string }[]>(() => {
    return path.split('/').map((name, index, arr) => ({
      name,
      path: [...arr].splice(0, index + 1).join('/'),
    }));
  }, [path]);

  if (data.length < 1) return null;

  return (
    <MuiBreadcrumbs>
      {data.map((item, index) => (
        <Chip
          key={item.name}
          label={item.name}
          size="small"
          onClick={() => (index === 0 ? setPath(undefined) : setPath(item.path))}
        />
      ))}
    </MuiBreadcrumbs>
  );
}
