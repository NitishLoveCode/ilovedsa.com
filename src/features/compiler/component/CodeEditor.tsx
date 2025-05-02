import { useRef, Fragment, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../../../constants/CodeEditor";
import BasicSelect from "../../../components/BasicSelect";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import * as monacoEditor from 'monaco-editor'; // for strong typing



function CodeEditor({code, setCode}: {code: string, setCode:(value: string)=> void}) {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState<keyof typeof CODE_SNIPPETS>("javascript");



  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  // Handle language change
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as keyof typeof CODE_SNIPPETS;
    setLanguage(selectedLanguage);

    // Optionally update editor value directly (if you want)
    if (editorRef.current) {
      editorRef.current.setValue(CODE_SNIPPETS[selectedLanguage]);
    }
  };

  // Convert language versions for Select component
  const convertLanguageVersions = (data: Record<string, string>) => {
    return Object.entries(data).map(([key, version]) => ({
      label: `${key} (${version})`, // better label
      value: key,
      disabled: key != "javascript" ? true : false
    }));
  };

  return (
    <Fragment>
      <Box className="rounded-b-2xl mt-2.5 overflow-hidden">
        <Box className="mt-2 mb-1 justify-between flex items-center">
          <BasicSelect
            label="Language"
            value={language}
            onChange={handleLanguageChange}
            options={convertLanguageVersions(LANGUAGE_VERSIONS)}
            className="w-48 ml-4"
          />
          <Typography style={{fontSize: "10px", padding: 10}}>We're a small team with big dreams—your support can make a big difference. Contribute to ilovedsa.com and help us add more features and language support for everyone!</Typography>
        </Box>

        <Box>
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="70vh"
            width="43vw"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={code}
            onChange={(value) => setCode(value!)}
          />
        </Box>
      </Box>
    </Fragment>
  );
}

export default CodeEditor;