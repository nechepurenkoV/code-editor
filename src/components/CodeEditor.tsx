import Editor from "@monaco-editor/react";
import { Box } from "@mui/material";

type CodeEditorProps = {
  language: string;
  code: string;
  setCode: (value: string) => void;
};

export function CodeEditor({ language, code, setCode }: CodeEditorProps) {
  return (
    <Box
      border="1px solid #ccc"
      sx={{
        height: { xs: "30vh", md: "50vh" },
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Editor
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </Box>
  );
}
