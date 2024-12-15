import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CodeEditor } from "./components/CodeEditor";
import { LanguageSelector } from "./components/LanguageSelector";
import { OutputBlock } from "./components/OutputBlock";
import { RunButton } from "./components/RunButton";
import { useState } from "react";
import { executeCode } from "./api/executeCode";

function App() {
  const [language, setLanguage] = useState("go"); // Go should be set by default because we can't use // for comments in Python
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleRun = async () => {
    setOutput("Running code...");

    const result = await executeCode({ language, code });

    if (result.status === "success") {
      setOutput(result.output || "");
    } else {
      setOutput(`${result.error}`);
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        m: "auto",
        maxWidth: "1200px",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          mb: 2,
          textAlign: "left",
          backgroundColor: "#fefefe",
          p: 2,
        }}
      >
        <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
          Task:
        </Typography>
        <Typography variant="body1">
          Write a program that takes a string and outputs it in reverse order.
          Use your preferred programming language.
        </Typography>
      </Paper>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
        <LanguageSelector language={language} setLanguage={setLanguage} />
        {isDesktop ? <RunButton onRun={handleRun} /> : undefined}
      </Box>

      <Box
        display="flex"
        gap={2}
        sx={{ mt: 2, flexDirection: { xs: "column", md: "row" } }}
      >
        <CodeEditor language={language} code={code} setCode={setCode} />
        {!isDesktop ? <RunButton onRun={handleRun} /> : undefined}
        <OutputBlock output={output} />
      </Box>
    </Box>
  );
}

export default App;
