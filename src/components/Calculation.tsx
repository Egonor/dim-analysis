import { useEffect, useState } from "react";
import Ratio, { RatioProps } from "./Ratio";
import { Box, Button, Stack } from "@mui/material";

type CalculationProps = {};

const Calculation = (props: CalculationProps) => {
  const newRatio: RatioProps = {
    key: 1,
    unitName: "Test Unit",
    numerator: 12,
    numeratorUnits: "meter",
    denominator: 24,
    denominatorUnits: "second",
  };

  const [ratios, setRatios] = useState<Array<RatioProps>>([newRatio]);

  useEffect(() => {}, []);

  return (
      <Stack direction={"row"} spacing={2} sx={{ flexWrap: "wrap" }}>
        {ratios.map((ratioProps: RatioProps) => {
          return <Ratio {...ratioProps} />;
        })}
        <Button
          onClick={() => null}
          sx={{
            color: "primary",
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          +
        </Button>
      </Stack>
  );
};

export default Calculation;
