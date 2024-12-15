import Editor from "@monaco-editor/react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

type CodeEditorProps = {
  language: string;
  code: string;
  setCode: (value: string) => void;
};

export function CodeEditor({ language, code, setCode }: CodeEditorProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      height="50vh"
      width={isDesktop ? "50%" : "100%"}
      border="1px solid #ccc"
    >
      <Editor
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </Box>
  );
}
