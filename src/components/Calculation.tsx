import { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import RatioComponent, { Ratio } from "./Ratio";

type CalculationProps = {};

const Calculation = (props: CalculationProps) => {
  const initialRatio: Ratio = {
    id: 0,
    unitName: "Test Unit",
    numerator: 12,
    numeratorUnits: "meter",
    denominator: 24,
    denominatorUnits: "second",
  };

  const [ratios, setRatios] = useState<Array<Ratio>>([initialRatio]);

  // Effects
  useEffect(() => {}, []);

  const handleAddRatio = () => {
    setRatios([
      ...ratios,
      // TODO: Get initial ratio values from Unit Picker
      {
        id: ratios?.length ?? 1,
        unitName: "New Ratio",
        numerator: 1,
        numeratorUnits: "meter",
        denominator: 1,
        denominatorUnits: "second",
      } as Ratio,
    ]);
  };

  // Event Handlers
  const handleChange = (newRatio: Ratio) => {
    setRatios(
      ratios.map((oldRatio: Ratio) => {
        if (newRatio.id === oldRatio.id) {
          return newRatio;
        }
        return oldRatio;
      })
    );
  };

  const calculate = (numerator: number, denominator: number): void => {};

  return (
    // TODO: Styling
    //   - Fix wrap spacing (rows overlap)
    //   - First Ratio has no left margin against paper
    //   - Add symbol gets pushed to next row
    //   - Multiply symbol spacing might be too much
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ flexWrap: "wrap", alignItems: "center" }}
    >
      {ratios.map((ratio: Ratio, index: number) => {
        return (
          <>
            <RatioComponent
              key={ratio.id}
              ratio={ratio}
              handleChange={handleChange}
            />
            {/* Multiply Symbol */}
            {ratios?.length > 1 && index !== ratios.length - 1 && (
              // <CircleIcon sx={{ color: "secondary", scale: "0.3" }} />
              <CloseIcon sx={{ color: "secondary", scale: "0.7" }} />
            )}
          </>
        );
      })}
      <IconButton
        onClick={handleAddRatio}
        sx={{
          display: "flex",
          color: "secondary",
          //height: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddIcon sx={{ color: "secondary" }} />
      </IconButton>
      <></>
    </Stack>
  );
};

export default Calculation;
