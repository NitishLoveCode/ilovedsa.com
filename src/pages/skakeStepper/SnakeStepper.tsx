import { Fragment, useEffect, useState } from "react";
import Step from "./Step";
import { Box } from "@mui/material";
import { DashboardServices } from "../../services/dashboard.Services/dashboard.Services";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addDsaStepsSlice } from "../../store/features/dashboard/dsaSteps";
import { IDashboardStateInfo } from "../../modal/dashboard/DashboardModal";




export default function SnakeStepper() {
  const [dsaStepData, setDsaStepData] = useState<IDashboardStateInfo>({
    activityLog: {
        dsa_steps: 0,
        dsa_sub_steps: 0
      },
    dsaSteps: []
  })
  const dispatch = useAppDispatch()

  const storedDsaSteps = useAppSelector((state) => state.addDsaStepsSlice)
  

  // Get Dsa steps Data
  const getDsaSteps = async() =>{
    const response = await DashboardServices.getDsaSteps();
    dispatch(addDsaStepsSlice(response)) // Saving data in redux.
    setDsaStepData({
      activityLog: response.data.activityLog,
      dsaSteps: response.data.responseData
    })
  }

  useEffect(() =>{    
    if(storedDsaSteps.dsaStepsSlice.length === 1){
      getDsaSteps();
    }else{
      setDsaStepData({
        activityLog: storedDsaSteps.activityLog,
        dsaSteps: storedDsaSteps.dsaStepsSlice
      });
    }
  }, [])


  return (
    <Fragment>
      <Box className="flex m-5">
        <Box className="flex flex-col py-30 gap-26 w-fit">
          {dsaStepData.dsaSteps?.map((row, rowIndex) => (
            <Box key={rowIndex} className="flex gap-[5vw]">
              {row.map((step, stepIndex) => (
                <Step
                  key={`${rowIndex}-${stepIndex}`}
                  element={step[0].step}
                  rowLength={row.length}
                  isLastElement={stepIndex === row.length - 1}
                  isVeryLastElement={stepIndex}
                  isFirstElement={stepIndex === 0}
                  isEvenRow={rowIndex % 2 === 0}
                  isLastRow={rowIndex === dsaStepData.dsaSteps.length - 1}
                  activeNode={dsaStepData.activityLog.dsa_steps - 1}
                  stepName = {step[0]}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
}
