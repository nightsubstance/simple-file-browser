import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';

interface HiddenDirectoriesButtonProps {
  show: boolean;
  handler: () => void;
}

export function HiddenDirectoriesButton(props: HiddenDirectoriesButtonProps) {
  const title = props.show ? 'Hidden directories are visible' : 'Currently hidden directories are not visible';

  return (
    <Tooltip title={title}>
      <MenuItem onClick={props.handler}>
        <ListItemText>Hidden directories</ListItemText>
        <ListItemIcon>{props.show ? <VisibilityIcon /> : <VisibilityOffIcon />}</ListItemIcon>
      </MenuItem>
    </Tooltip>
  );
}
