import { Box } from "@mui/material";

type OutputBlockProps = {
  output: string;
};

export function OutputBlock({ output }: OutputBlockProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        px: 2,
        border: "1px solid #ccc",
        height: { xs: "30vh", md: "50vh" },
        width: { xs: "100%", md: "50%" },
      }}
    >
      <pre>{output}</pre>
    </Box>
  );
}
