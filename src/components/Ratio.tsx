import { StyledComponent } from "@emotion/styled";
import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import * as React from "react";

export type Ratio = {
  id: number;
  unitName: string;
  numerator: number;
  numeratorUnits: string;
  denominator: number;
  denominatorUnits: string;
};

interface IRatioProps {
  ratio: Ratio;
  handleChange: (ratio: Ratio) => void;
}

const RatioComponent = (props: IRatioProps) => {
  const handleNumeratorChange = (event: any) => {
    console.log(typeof event);

    if (props.handleChange)
      props.handleChange({
        ...props.ratio,
        numerator: event?.target.value ?? 1,
        denominator: 1,
      } as Ratio);
  };

  const handleDenominatorChange = (event: any) => {
    console.log(typeof event);

    if (props.handleChange)
      props.handleChange({
        ...props.ratio,
        numerator: 1,
        denominator: event?.target.value ?? 1,
      } as Ratio);
  };

  return (
    <div className="ratio">
      <Box>
        <Stack divider={<Divider flexItem sx={{ marginY: "20px" }} />}>
          <TextField
            className="numerator"
            variant="outlined"
            //type="text"
            value={props.ratio.numerator}
            onChange={handleNumeratorChange}
            // TODO: Number validation (this isn't working)
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {props.ratio.numerator > 1
                    ? props.ratio.numeratorUnits + "s"
                    : props.ratio.numeratorUnits}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="denominator"
            variant="outlined"
            value={props.ratio.denominator}
            onChange={handleDenominatorChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {props.ratio.denominator > 1
                    ? props.ratio.denominatorUnits + "s"
                    : props.ratio.denominatorUnits}
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default RatioComponent;
