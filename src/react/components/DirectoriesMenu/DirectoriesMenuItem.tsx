import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import { useMatch, useNavigate } from 'react-router-dom';

export function DirectoriesMenuItem(props: { name: string }) {
  const match = useMatch(`/${props.name}`);
  const navigate = useNavigate();

  function onClick() {
    navigate(`/${props.name}`);
  }

  return (
    <MenuItem selected={!!match} onClick={onClick}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText>{props.name}</ListItemText>
    </MenuItem>
  );
}
