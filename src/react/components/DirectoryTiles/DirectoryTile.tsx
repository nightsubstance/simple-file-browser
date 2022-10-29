import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { DirectoryObject } from '../../../types/DirectoryObject';
import { useQueryParam, StringParam } from 'use-query-params';

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
  const [, setPath] = useQueryParam('path', StringParam);

  function onClick() {
    if (props.data.isDirectory) {
      setPath(props.data.path);
    } else {
      window.api.openFile(props.data.path);
    }
  }

  return (
    <Tooltip title={props.data.name} enterDelay={400} enterNextDelay={400}>
      <Root onClick={onClick}>
        {props.data.isDirectory ? (
          <FolderIcon sx={{ fontSize: '3rem' }} />
        ) : (
          <DescriptionIcon sx={{ fontSize: '3rem' }} />
        )}
        <Typography
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
