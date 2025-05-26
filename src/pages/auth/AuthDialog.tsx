import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {userDetailsForm } from "../../modal/userServices/UserModal";
import { UserServices } from "../../services/userServices/UserServices";
import { useAppDispatch } from "../../store/store";
import { addLoginUser } from "../../store/features/user/AuthUser";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



export const AuthDialog = ({open, setOpen}:{open: boolean, setOpen:(parama: boolean)=> void}) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState<userDetailsForm>({
    name: "",
    email: "",
    password: ""
  });
  
  const dispatch = useAppDispatch();  
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (_: any, newMode: "login" | "signup" | null) => {
    if (newMode) setMode(newMode);
  };

  // user login configuration.
  const userSignIn = async(formData: userDetailsForm) =>{
    const response = await UserServices.signInUser({email: formData.email, password: formData.password});
    toast.success('Login Success')
    if(!response.error){
      // Storing data into database.
      dispatch(addLoginUser(response.user))
      handleClose() 
      navigate("/app")
    }
  }

  // User signUp configuration
  const userSignUp = async(formData: userDetailsForm) =>{
    const response = await UserServices.signUpUser({username: formData.name, email: formData.email, password: formData.password});
    if(!response.error){
      toast.success('Signup Success')
      // Storing data into database.
      dispatch(addLoginUser(response.user));
      handleClose();
      navigate("/app")
    }

  }


  const handleSubmit = () => {
    if (mode === "login") {
      userSignIn(formData)
    } else {
      userSignUp(formData);
    }
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

