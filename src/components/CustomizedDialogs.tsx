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


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({switchSack, setSwitchSack}: {switchSack: boolean, setSwitchSack: (setSwitchSack: boolean) => void}) {



  return (
    <Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
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
            <SwitchStackCard
              cardName='Dsa'
              numberOfAttempts={89556}
              numberOfFinish={55468}
              numberOfSteps={40}
            />
            <SwitchStackCard
              cardName='Dsa'
              numberOfAttempts={89556}
              numberOfFinish={55468}
              numberOfSteps={40}
            />
            <SwitchStackCard
              cardName='Dsa'
              numberOfAttempts={89556}
              numberOfFinish={55468}
              numberOfSteps={40}
            />
              <SwitchStackCard
                cardName='Dsa'
                numberOfAttempts={89556}
                numberOfFinish={55468}
                numberOfSteps={40}
              />
              <SwitchStackCard
                cardName='Dsa'
                numberOfAttempts={89556}
                numberOfFinish={55468}
                numberOfSteps={40}
              />
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
