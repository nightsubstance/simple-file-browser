import React, { useMemo } from 'react';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { StringParam, useQueryParam } from 'use-query-params';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbsProps {
  rootName: string;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const navigate = useNavigate();
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
      <Chip icon={<HomeIcon />} label="Landing" size="small" onClick={() => navigate('/')} />
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
