import { Box, useMediaQuery, useTheme } from "@mui/material";

type OutputBlockProps = {
  output: string;
};

export function OutputBlock({ output }: OutputBlockProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: isDesktop ? "50%" : "100%",
        height: "50vh",
        backgroundColor: "#f9f9f9",
        padding: "0 20px",
        border: "1px solid #ccc",
      }}
    >
      <pre>{output}</pre>
    </Box>
  );
}
