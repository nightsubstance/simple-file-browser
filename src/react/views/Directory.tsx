import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { DirectoryTiles } from '../components/DirectoryTiles';
import { DirectoryObject } from '../../types/DirectoryObject';
import _ from 'lodash';
import { StringParam, useQueryParam } from 'use-query-params';
import { useSnackbar } from 'notistack';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  overflow: 'auto',
}));

export function Directory() {
  const params = useParams<'path'>();
  const [data, setData] = useState<DirectoryObject | null>(null);
  const [queryPath] = useQueryParam('path', StringParam);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    window.api
      .getDirectoryDetails(queryPath || params.path)
      .then((response: DirectoryObject) => {
        setData((prev) => {
          if (_.isEqual(prev, response)) return prev;

          return response;
        });
      })
      .catch(() => {
        navigate(-1);
        enqueueSnackbar('Something went wrong, check if you have permissions to this directory.', { variant: 'error' });
      });
  }, [params.path, queryPath]);

  return <Root>{!!data && <DirectoryTiles data={data.children} name={data.name} />}</Root>;
}
