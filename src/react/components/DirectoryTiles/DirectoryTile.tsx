import React, { useEffect, useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import { StringParam,useQueryParam } from 'use-query-params';

import { DirectoryObject } from '../../../types/DirectoryObject';

const Root = styled('div')(({ theme }) => ({
  width: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: theme.spacing(),
  borderRadius: '4px',
  transition: theme.transitions.create('background-color', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },
}));

const IconImage = styled('img')({
  width: '3rem',
  height: '3rem',
});

interface DirectoryTileProps {
  data: DirectoryObject;
}

export function DirectoryTile(props: DirectoryTileProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();
  const [, setPath] = useQueryParam('path', StringParam);

  function onClick() {
    if (props.data.isDirectory) {
      setPath(props.data.path);
    } else {
      window.api
        .openFile(props.data.path)
        .then((response) => {
          if (response === 'Failed to open path') {
            enqueueSnackbar('Failed to open path', { variant: 'error' });
          }
        })
        .catch((error) => {
          if (error instanceof Error) {
            enqueueSnackbar(error.message, { variant: 'error' });
          } else {
            enqueueSnackbar('Unknown error', { variant: 'error' });
          }
        });
    }
  }

  useEffect(() => {
    window.api.getFileIcon(props.data.path).then((response: string) => {
      setImageSrc(response);
    });
  }, []);

  return (
    <Tooltip title={props.data.name} enterDelay={400} enterNextDelay={400}>
      <Root onDoubleClick={onClick}>
        {!!imageSrc && !props.data.isDirectory && <IconImage src={imageSrc} />}
        {!imageSrc || props.data.isDirectory ? (
          props.data.isDirectory ? (
            <FolderIcon sx={{ fontSize: '3rem', userSelect: 'none' }} />
          ) : (
            <DescriptionIcon sx={{ fontSize: '3rem', userSelect: 'none' }} />
          )
        ) : null}
        <Typography
          sx={{ userSelect: 'none' }}
          variant="body2"
          textAlign="center"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          width="100%"
        >
          {props.data.name}
        </Typography>
      </Root>
    </Tooltip>
  );
}
