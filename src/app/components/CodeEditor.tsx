"use client";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/ext-language_tools";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FC, FormEvent, useState } from "react";

export const CodeEditor: FC = () => {
  const initialData = `function onLoad(editor) {
    console.log("I've loaded!");
  }`;
  const [code, setCode] = useState(initialData);

  const theme = useTheme();
  const userTheme = () => {
    if (theme.theme === "dark" || theme.resolvedTheme === "dark") {
      return "twilight";
    } else return "kuroir";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("code => ", code);
  };

  return (
    <div className="flex flex-col place-content-end">
      <div className="place-self-end">
        <div className="w-full bg-primary p-2 rounded-t-md">
          <h3 className="font-bold tracking-wide">Solution</h3>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <AceEditor
            name="editor"
            mode="javascript"
            theme={userTheme()}
            width="700px"
            value={code || ""}
            onChange={setCode}
            editorProps={{ $blockScrolling: true }}
            fontSize={14}
            tabSize={2}
          />
          <Button className="flex w-fit place-self-end my-4" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
