import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type LanguageSelectorProps = {
  language: string;
  setLanguage: (value: string) => void;
};

export function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <FormControl sx={{ width: isDesktop ? "120px" : undefined }}>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        label="Language"
        onChange={(e) => setLanguage(e.target.value)}
      >
        <MenuItem value="go">Go</MenuItem>
        <MenuItem value="python">Python</MenuItem>
      </Select>
    </FormControl>
  );
}
