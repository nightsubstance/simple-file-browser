import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useGlobalContext } from '../GlobalContextProvider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface SettingsMenu {
  anchorElement: HTMLElement;
  onClose: () => void;
}

export function SettingsMenu(props: SettingsMenu) {
  const { handleShowHiddenDirectories, showHiddenDirectories, themeMode, handleThemeMode } = useGlobalContext();

  function handleShowHiddenDirectoriesClick() {
    handleShowHiddenDirectories();
    props.onClose();
  }

  function handleThemeModeClick() {
    handleThemeMode();
    props.onClose();
  }

  return (
    <Menu open={!!props.anchorElement} anchorEl={props.anchorElement} onClose={props.onClose}>
      <Tooltip title="Show or hide hidden directories" placement="right">
        <MenuItem onClick={handleShowHiddenDirectoriesClick}>
          <ListItemIcon>{showHiddenDirectories ? <VisibilityIcon /> : <VisibilityOffIcon />}</ListItemIcon>
          <ListItemText>Hidden files</ListItemText>
        </MenuItem>
      </Tooltip>
      <Tooltip title="Change the theme from light to dark and vice versa" placement="right">
        <MenuItem onClick={handleThemeModeClick}>
          <ListItemIcon>{themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</ListItemIcon>
          <ListItemText>Theme mode</ListItemText>
        </MenuItem>
      </Tooltip>
    </Menu>
  );
}
