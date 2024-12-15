import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { languageList } from "../languageList";

type LanguageSelectorProps = {
  language: string;
  setLanguage: (value: string) => void;
};

export function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProps) {
  return (
    <FormControl sx={{ width: { md: "120px" } }}>
      <InputLabel id="language-label">Language</InputLabel>
      <Select
        labelId="language-label"
        id="language"
        value={language}
        label="Language"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languageList.map((language) => (
          <MenuItem value={language.key}>{language.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
