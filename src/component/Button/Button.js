import React from "react";
import { Button } from "@mui/material";

function Buttons(props) {
  return (
    <Button type={props.type} variant={props.variant} fullWidth={props.fullWidth} sx={{ mt: 3, mb: 2 }}>
      {props.label}
    </Button>
  );
}

export default Buttons;
