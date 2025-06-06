import Typography from "@mui/material/Typography";
import { Box, Button, Chip, Paper } from "@mui/material";
import { primaryColor } from "../constants/style";
import GroupsIcon from "@mui/icons-material/Groups";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { iSwitchStackCard } from "../modal/dashboard/DashboardModal";

function SwitchStackCard({handleSwitchStack, stackId,  cardName, numberOfSteps, numberOfAttempts, numberOfFinish}: iSwitchStackCard) {
  return (
    <Box className="flex wrap-normal gap-5">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 176,
            height: 192,
          },
        }}
      >
        <Paper className="p-2 relative">
          <Box>
            <Typography className="primary-color" style={{fontSize: 14}} component={"h2"}>
              {cardName}
            </Typography>
          </Box>

          <Box className="flex flex-col gap-2">
            <Box className="flex items-center gap-3">
              <Typography style={{fontSize: 12}} variant="body2" component={"h2"}>
                Steps: {numberOfSteps}
              </Typography>
              <Chip
                icon={
                  <FiberManualRecordIcon color="success" fontSize={"small"} />
                }
                label="Live: 567"
                size="small"
              />
            </Box>
            <Box className="flex items-center gap-2">
              <Typography style={{fontSize: 14}} variant="body2" component={"h2"}>
                Attampts:
              </Typography>
              <Box className="flex items-center gap-0.5">
                <Typography style={{fontSize: 14}}>{numberOfAttempts}</Typography>
                <GroupsIcon/>
              </Box>
            </Box>
            <Box className="flex items-center gap-2">
              <Typography style={{fontSize: 14}} variant="body2" component={"h2"}>
                Finish:
              </Typography>
              <Box className="flex items-center gap-0.5">
                <Typography style={{fontSize: 14}}>{numberOfFinish}</Typography>
                <GroupsIcon />
              </Box>
            </Box>
          </Box>

          <Box className="flex items-center justify-center absolute bottom-2">
            <Button
              onClick={() => handleSwitchStack(stackId)}
              sx={{
                height: 30,
                width: 160,
                padding: "2px 10px",
                minWidth: "auto",
                color: "gray",
                borderColor: "gray",
                "&:hover": {
                  color: primaryColor,
                  borderColor: primaryColor,
                  backgroundColor: "transparent",
                },
              }}
              variant="outlined"
            >
              Switch
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default SwitchStackCard;
