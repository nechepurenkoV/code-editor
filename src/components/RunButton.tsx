import { Button, useMediaQuery, useTheme } from "@mui/material";

type RunButtonProps = {
  onRun: () => void;
};

export function RunButton({ onRun }: RunButtonProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Button
      variant="contained"
      onClick={onRun}
      sx={{
        width: isDesktop ? "120px" : undefined,
        height: "56px",
      }}
    >
      Run
    </Button>
  );
}
