import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: theme.spacing(0, 2),
  WebkitUserSelect: 'none',
  userSelect: 'none',
  WebkitAppRegion: 'drag',
}));

const NavigateContainer = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(),
}));

const ActionsContainer = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(),
}));

const StyledIconButton = styled(IconButton)({
  WebkitAppRegion: 'no-drag',
});

export function AppBar() {
  const navigate = useNavigate();

  function onClose() {
    window.api.closeWindow();
  }

  function onMinimize() {
    window.api.minimizeWindow();
  }

  function onMaximize() {
    window.api.maximizeWindow();
  }

  function onBack() {
    navigate(-1);
  }

  function onForward() {
    navigate(1);
  }

  return (
    <Root>
      <NavigateContainer>
        <Tooltip title="Settings">
          <StyledIconButton>
            <SettingsIcon />
          </StyledIconButton>
        </Tooltip>
        <Divider orientation="vertical" />
        <Tooltip title="Back">
          <StyledIconButton onClick={onBack} size="small">
            <ArrowBackIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Forward">
          <StyledIconButton onClick={onForward} size="small">
            <ArrowForwardIcon />
          </StyledIconButton>
        </Tooltip>
      </NavigateContainer>
      <ActionsContainer>
        <Tooltip title="Maximize">
          <StyledIconButton onClick={onMaximize} size="small">
            <CropSquareIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Minimize">
          <StyledIconButton onClick={onMinimize} size="small">
            <MinimizeIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Close">
          <StyledIconButton onClick={onClose} size="small">
            <CloseIcon />
          </StyledIconButton>
        </Tooltip>
      </ActionsContainer>
    </Root>
  );
}
