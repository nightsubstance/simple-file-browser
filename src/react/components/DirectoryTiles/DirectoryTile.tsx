import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
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

interface DirectoryTileProps {
  data: DirectoryObject;
}

export function DirectoryTile(props: DirectoryTileProps) {
  function onClick() {
    console.log(props.data);
    window.api.openFile(props.data.path).then((response) => {
      console.log(response);
    });
  }

  return (
    <Tooltip title={props.data.name}>
      <Root onClick={onClick}>
        {props.data.isDirectory ? <FolderIcon /> : <DescriptionIcon />}
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
