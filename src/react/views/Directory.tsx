import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { DirectoryTiles } from '../components/DirectoryTiles';
import { DirectoryObject } from '../../types/DirectoryObject';
import _ from 'lodash';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  overflow: 'auto',
}));

export function Directory() {
  const params = useParams<'name'>();
  const [files, setFiles] = useState<DirectoryObject[]>([]);

  useEffect(() => {
    window.api.getDirectoryDetails(params.name).then((response: DirectoryObject[]) => {
      setFiles((prev) => {
        if (_.isEqual(prev, response)) return prev;

        return response;
      });
    });
  }, [params.name]);

  return (
    <Root>
      <DirectoryTiles data={files} name={params.name} />
    </Root>
  );
}
