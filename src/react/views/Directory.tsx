import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import _ from 'lodash';
import { useSnackbar } from 'notistack';
import { StringParam, useQueryParam } from 'use-query-params';

import { DirectoryObject } from '../../types/DirectoryObject';
import { DirectoryTiles } from '../components/DirectoryTiles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  overflow: 'auto',
}));

export function Directory() {
  const params = useParams<'name'>();
  const [data, setData] = useState<DirectoryObject | null>(null);
  const [queryPath] = useQueryParam('path', StringParam);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  function getData() {
    window.api
      .getDirectoryDetails(queryPath || params.name)
      .then((response: DirectoryObject) => {
        setData((prev) => {
          if (_.isEqual(prev, response)) return prev;

          return response;
        });
      })
      .catch(() => {
        navigate(-1);
        enqueueSnackbar('Something went wrong, check if you have permissions to this directory.', {
          variant: 'error',
        });
      });
  }

  useEffect(() => {
    getData();

    const interval = setInterval(() => getData(), 200);

    return () => clearInterval(interval);
  }, [params.name, queryPath]);

  return <Root>{!!data && <DirectoryTiles rootName={params.name || ''} data={data.children} />}</Root>;
}
