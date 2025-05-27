import {Fragment, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { persistor, useAppDispatch, useAppSelector } from '../store/store';
import { resetLogedInUser } from "../store/features/user/AuthUser";
import { useNavigate } from 'react-router-dom';
import { HOME } from '../navigation/CONSTANTS';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userData, setUserData] = useState("")
  const open = Boolean(anchorEl);

  const userDetails = useAppSelector(state => state.authUser);
  const dispatch = useAppDispatch();
  const navigator = useNavigate()


  // Finding short name.
  const getShortName = (userName: string) =>{
    let shortName = ""
    userName.split(" ").map(subName=> shortName += subName[0]);
    setUserData(shortName);
  }

  // Logout user
  const handleLogout  = () =>{
    // Reset redux data.
    dispatch(resetLogedInUser())
    persistor.purge(); // Clear persisted storage (localStorage)
    navigator(HOME)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(() =>{
    getShortName(userDetails.userName)
  }, [])
  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {
              userData != "undefined" ? <Avatar sizes='large'>{userData}</Avatar> : <Avatar sizes='large'></Avatar>
            }
            
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        className='-mt-2'
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem disabled onClick={handleClose}>
          <Avatar /> {userDetails.userName}
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=> handleLogout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
