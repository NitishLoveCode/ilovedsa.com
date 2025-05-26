import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  SelectChangeEvent,
} from "@mui/material";

const AuthDialog = ({open, setOpen}:{open: boolean, setOpen:(parama: boolean)=> void}) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (_: any, newMode: "login" | "signup" | null) => {
    if (newMode) setMode(newMode);
  };

  const handleSubmit = () => {
    if (mode === "login") {
      console.log("Login with", formData.email, formData.password);
    } else {
      console.log("Signup with", formData);
    }
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="primary-color">{mode === "login" ? "Login" : "Sign Up"}</DialogTitle>
        <DialogContent sx={{ maxWidth: 400 }}>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleToggle}
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="signup">Sign Up</ToggleButton>
          </ToggleButtonGroup>

          {mode === "signup" && (
            <TextField
                    
              margin="dense"
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
          )}

          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={formData.password}
            onChange={handleInputChange}
          />

          {mode === "signup" && (
            <FormControl fullWidth margin="dense">
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleSelectChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}><span className="text-gray-500">Cancel</span></Button>
          <Button color="warning" variant="outlined" onClick={handleSubmit}>
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AuthDialog;
