import { StyledComponent } from "@emotion/styled";
import { Box, Divider, Stack } from "@mui/material";
import * as React from "react";

export type RatioProps = {
  key: number,
  unitName: string;
  numerator: number;
  numeratorUnits: string;
  denominator: number;
  denominatorUnits: string;
}

const Ratio = (props: RatioProps) => {


  return (
    <div className="ratio">
      <Box>
        <Stack
          divider={<Divider flexItem sx={{color: 'green'}}/>}
        >
          <div className="stackItem">
            <p className="numerator">{props.numerator} {props.numeratorUnits}{props.numerator === 1 ? "" : "s"}</p>
          </div>
          <div className="stackItem">
            <p className="denominator">{props.denominator} {props.denominatorUnits}</p>
          </div>
        </Stack>
      </Box>
    </div>
  );
};

export default Ratio;
