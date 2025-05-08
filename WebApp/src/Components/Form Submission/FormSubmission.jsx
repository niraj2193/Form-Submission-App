import React, { useState, useEffect } from "react";
import { addUser, getUsers } from "../../services/apiService";
import {
  TextField,
  Button,
  Tooltip,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import "./FormSubmission.css";
import { errorMessages } from "../../utils/errorMessages";
import UsersList from "../GetFormDetails/UsersList";

const FormForContactSubmission = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!name) {
      newErrors.name = errorMessages.nameRequired;
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = errorMessages.phoneInvalid;
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = errorMessages.emailInvalid;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmitUserDetails = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Check for duplicate name and email
    const isDuplicate = users.some(
      (u) => u.name === name.trim() && u.email === email.trim()
    );

    if (isDuplicate) {
      setSnackbar({
        open: true,
        message: errorMessages.AlreadyExistsEntry,
        severity: "warning",
      });
      return;
    }

    const user = { name, phone, email };

    try {
      const addedUser = await addUser(user);
      setUsers((prevUsers) => [...prevUsers, addedUser]);

      // ✅ Reset form fields after success
      setName("");
      setPhone("");
      setEmail("");

      setErrors({
        name: "",
        phone: "",
        email: "",
      });

      setSnackbar({
        open: true,
        message: errorMessages.userAddedSuccess,
        severity: "success",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        const backendErrors = error.response.data.errors;
        setErrors({
          name: backendErrors.name ? backendErrors.name[0] : "",
          phone: backendErrors.phone ? backendErrors.phone[0] : "",
          email: backendErrors.email ? backendErrors.email[0] : "",
        });
      } else {
        setSnackbar({
          open: true,
          message: errorMessages.genericError,
          severity: "error",
        });
      }
    }
  };

  const handleClear = () => {
    // Clear all the form fields
    setName("");
    setPhone("");
    setEmail("");
    setErrors({
      name: "",
      phone: "",
      email: "",
    });
  };
  // Function to fetch the user list
  const fetchUsers = async () => {
    try {
      await getUsers();
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // const refreshUsersList = () => {
  //   fetchUsers();
  // };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-title">Submit Form Detail</h2>
        <form onSubmit={handleSubmitUserDetails}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Tooltip
              title={errors.name || ""}
              open={!!errors.name}
              arrow
              placement="right"
            >
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                variant="outlined"
              />
            </Tooltip>

            <Tooltip
              title={errors.phone || ""}
              open={!!errors.phone}
              arrow
              placement="right"
            >
              <TextField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
                variant="outlined"
              />
            </Tooltip>

            <Tooltip
              title={errors.email || ""}
              open={!!errors.email}
              arrow
              placement="right"
            >
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
              />
            </Tooltip>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>

              {/* Clear Button */}
              <Button
                type="button"
                variant="contained"
                color="gray"
                onClick={handleClear}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </form>
        {/* Integrating UsersList Component */}
        <UsersList users={users} loading={loading} />
      </div>

      {/* Snackbar for Success/Error message */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        variant="filled"
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FormForContactSubmission;
