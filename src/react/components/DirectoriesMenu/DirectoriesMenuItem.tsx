import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import { useMatch, useNavigate } from 'react-router-dom';
import { DirectoryObject } from '../../../types/DirectoryObject';

export function DirectoriesMenuItem(props: { data: DirectoryObject }) {
  const match = useMatch(`/${props.data.name}`);
  const navigate = useNavigate();

  function onClick() {
    navigate(`/${props.data.name}`, {
      state: props.data,
    });
  }

  return (
    <MenuItem selected={!!match} onClick={onClick}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText>{props.data.name}</ListItemText>
    </MenuItem>
  );
}
