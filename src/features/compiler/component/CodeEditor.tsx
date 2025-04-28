import React, { useRef, Fragment, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../../../constants/CodeEditor";
import BasicSelect from "../../../components/BasicSelect";
import { Box, SelectChangeEvent } from "@mui/material";
import * as monacoEditor from 'monaco-editor'; // for strong typing
import { BasicButton } from "../../../components/BasicButton";

function CodeEditor() {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState<keyof typeof CODE_SNIPPETS>("javascript");

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
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
    }));
  };

  return (
    <Fragment>
      <Box className="rounded-b-2xl overflow-hidden">
        <Box className="mt-2 justify-between flex">
          <BasicSelect
            label="Language"
            value={language}
            onChange={handleLanguageChange}
            options={convertLanguageVersions(LANGUAGE_VERSIONS)}
            className="w-48 ml-4"
          />
          <BasicButton color="success" variant="contained" text="Run code" />
        </Box>

        <Box>
          <Editor
            height="70vh"
            width="43vw"
            theme="vs-dark"
            language={language}
            value={CODE_SNIPPETS[language]}
            onMount={handleEditorDidMount}
          />
        </Box>
      </Box>
    </Fragment>
  );
}

export default CodeEditor;
