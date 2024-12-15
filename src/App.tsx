import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CodeEditor } from "./components/CodeEditor";
import { LanguageSelector } from "./components/LanguageSelector";
import { OutputBlock } from "./components/OutputBlock";
import { RunButton } from "./components/RunButton";
import { useState } from "react";
import { executeCode } from "./api/executeCode";

function App() {
  const [language, setLanguage] = useState("go");
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
        p: "20px",
        m: "auto",
        maxWidth: "1200px",
      }}
    >
      <Box
        sx={{
          mb: "20px",
          textAlign: "left",
          width: "1200px-20px",
          backgroundColor: "#fefefe",
          p: "20px",
          boxShadow: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
          Task:
        </Typography>
        <Typography variant="body1">
          Write a program that takes a string and outputs it in reverse order.
          Use your preferred programming language.
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap="20px"
      >
        <LanguageSelector language={language} setLanguage={setLanguage} />
        {isDesktop ? <RunButton onRun={handleRun} /> : undefined}
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        marginTop="20px"
        gap="20px"
      >
        <CodeEditor language={language} code={code} setCode={setCode} />
        {!isDesktop ? <RunButton onRun={handleRun} /> : undefined}
        <OutputBlock output={output} />
      </Box>
    </Box>
  );
}

export default App;
