import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useGlobalContext } from '../GlobalContextProvider';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface SettingsMenu {
  anchorElement: HTMLElement;
  onClose: () => void;
}

export function SettingsMenu(props: SettingsMenu) {
  const { handleShowHiddenDirectories, showHiddenDirectories } = useGlobalContext();

  function onClick() {
    handleShowHiddenDirectories();
  }

  return (
    <Menu open={!!props.anchorElement} anchorEl={props.anchorElement} onClose={props.onClose}>
      <Tooltip title="Show or hide hidden directories">
        <MenuItem onClick={onClick}>
          <ListItemIcon>{showHiddenDirectories ? <VisibilityIcon /> : <VisibilityOffIcon />}</ListItemIcon>
          <ListItemText>Hidden directories</ListItemText>
        </MenuItem>
      </Tooltip>
    </Menu>
  );
}
