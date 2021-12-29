import { useState, useEffect } from "react";
import { useForm } from "./custom/useForm";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// DatePicker
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const AddParams = (props) => {
  const [values, handleChange] = useForm({
    content: "",
    dueDate: "",
  });

  const [dueDate, setDueDate] = useState(new Date());

  const { handleSubmit } = props;

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Content"
            name="content"
            value={values.content}
            onChange={handleChange}
            placeholder="Write something ..."
            size="small"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Due Date"
              inputFormat="MM/dd/yyyy"
              value={dueDate}
              onChange={setDueDate}
              renderInput={(params) => (
                <TextField name="dueDate" size="small" {...params} />
              )}
            />
          </LocalizationProvider>
          <FormControlLabel
            control={<Checkbox name="important" />}
            label="Important"
            name="important"
          />

          <Button type="submit" variant="outlined" size="small">
            Add Task
          </Button>
          <br />
          {/* <label htmlFor="important">Important</label>
          <Checkbox name="important" /> */}
        </Box>
      </form>
    </div>
  );
};

export default AddParams;
