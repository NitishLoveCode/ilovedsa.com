import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment } from 'react/jsx-runtime';
import SwitchStackCard from './SwitchStackCard';
import { Box } from '@mui/material';
import { DashboardServices } from '../services/dashboard.Services/dashboard.Services';
import { useEffect } from 'react';
import { useAppSelector } from '../store/store';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({switchSack, setSwitchSack}: {switchSack: boolean, setSwitchSack: (setSwitchSack: boolean) => void}) {
  const techStacks = useAppSelector((state) => state.stackSwitchSlice);

  return (
    <Fragment>
      <BootstrapDialog
        onClose={() => setSwitchSack(!switchSack)}
        aria-labelledby="customized-dialog-title"
        open={switchSack}
        PaperProps={{
          sx: {
            width: '800px',
            height: '600px',
            maxWidth: 'none',
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Switch Stack
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setSwitchSack(!switchSack)}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>



          <Box className = "flex flex-wrap">

            {
              techStacks?.map((element, index) =>(
                <SwitchStackCard
                  key={index}
                  cardName= {element.StackName}
                  numberOfAttempts={element.numberOfAttempts}
                  numberOfFinish={element.numberOfFinish}
                  numberOfSteps={element.numberOfSteps}
                />
              ))
            }
          </Box>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setSwitchSack(!switchSack)}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}
