import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { DirectoryObject } from '../../../types/DirectoryObject';
import { useQueryParam, StringParam } from 'use-query-params';
import { useSnackbar } from 'notistack';

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

interface DirectoryTileProps {
  data: DirectoryObject;
}

export function DirectoryTile(props: DirectoryTileProps) {
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

  return (
    <Tooltip title={props.data.name} enterDelay={400} enterNextDelay={400}>
      <Root onDoubleClick={onClick}>
        {props.data.isDirectory ? (
          <FolderIcon sx={{ fontSize: '3rem', userSelect: 'none' }} />
        ) : (
          <DescriptionIcon sx={{ fontSize: '3rem', userSelect: 'none' }} />
        )}
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
