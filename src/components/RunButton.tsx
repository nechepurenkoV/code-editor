import { Button } from "@mui/material";

type RunButtonProps = {
  onRun: () => void;
};

export function RunButton({ onRun }: RunButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onRun}
      sx={{
        width: { md: "120px" },
        height: "56px",
      }}
    >
      Run
    </Button>
  );
}
