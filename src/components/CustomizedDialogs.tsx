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
import { useAppSelector } from '../store/store';
import { DashboardServices } from '../services/dashboard.Services/dashboard.Services';
import { useDispatch } from 'react-redux';
import { addTechStackStepSlice, takeSelectedStack0thPosition } from '../store/features/dashboard/techStackStepSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../navigation/CONSTANTS';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({switchSack, setSwitchSack}: {switchSack: boolean, setSwitchSack: (setSwitchSack: boolean) => void}) {
  const {stackSwitchSlice, techStackStepSlice} = useAppSelector((state) => state);
  const dispatch = useDispatch()
  const navigation = useNavigate();

  // Invoke function object.
  const invokeFunctionObj = [
    {
      stackId: 1,
      stackName: "DSA",
      getDataFromApi: DashboardServices.getDsaSteps
    },
    {
      stackId: 2,
      stackName: "Targeted Services Based Company DSA",
      getDataFromApi: DashboardServices.getDsaForServicesBase
    },
    {
      stackId: 4,
      stackName: "Typescript interview Question",
      getDataFromApi: DashboardServices.getTypescriptQuestion
    }
  ]



  const handleSwitchStack = async(stackId: number) =>{
    console.log("fdddd", stackId)

    /**
     * If stack already present in slice then make that TechStack Data at frist position
     * and Avoid calling API.
     */
    let isPresent = false;
    techStackStepSlice.forEach((element) =>{
      if(element.stackId === stackId){
        // Take selected TechStack at frist position
        dispatch(takeSelectedStack0thPosition(stackId))
        isPresent = true;
        return;
      }
    })
    if(isPresent){
      setSwitchSack(!switchSack) // Closing TechStach popUp
      navigation(DASHBOARD)
      return;
    }

    // Finding stack if stack is not present in tack-stack.
    const getStackData = invokeFunctionObj.find((element) => element.stackId === stackId);
    const response = await getStackData?.getDataFromApi();
    const stackTimeLineData = {
      stackId: stackId,
      techStackData: response!
    }
    dispatch(addTechStackStepSlice(stackTimeLineData))
    // setSwitchSack(!switchSack) // Closing TechStach popUp
    navigation(DASHBOARD)

  }

  useEffect(() =>{
   handleSwitchStack(1)
  },[])


  
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
              stackSwitchSlice?.map((element, index) =>(
                <SwitchStackCard
                  handleSwitchStack = {handleSwitchStack}
                  key={index}
                  cardName= {element.StackName}
                  numberOfAttempts={element.numberOfAttempts}
                  numberOfFinish={element.numberOfFinish}
                  numberOfSteps={element.numberOfSteps}
                  stackId = {element.stack_id}
                />
              ))
            }
          </Box>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {
            setSwitchSack(!switchSack)
          }}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}
