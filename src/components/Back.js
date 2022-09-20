import { useNavigate } from "react-router-dom";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Back() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<ChevronLeftIcon />}
        onClick={handleClick}
      >
        Go Back
      </Button>
    </Stack>
  );
}
