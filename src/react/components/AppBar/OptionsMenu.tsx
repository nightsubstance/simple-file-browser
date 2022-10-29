import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// import VisibilityIcon from '@mui/icons-material/Visibility';

interface OptionsMenu {
  anchorElement: HTMLElement;
  onClose: () => void;
}

export function OptionsMenu(props: OptionsMenu) {
  return (
    <Menu open={!!props.anchorElement} anchorEl={props.anchorElement} onClose={props.onClose}>
      <MenuItem>
        <ListItemIcon>
          <VisibilityOffIcon />
        </ListItemIcon>
        <ListItemText>Hidden files</ListItemText>
      </MenuItem>
    </Menu>
  );
}
