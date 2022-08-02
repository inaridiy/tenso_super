import { Button, Input } from "@/components/Elements";
import { useState } from "react";
import { useSpace, useSpaceId } from "../hooks";

export const Space = () => {
  const spaceId = useSpaceId();
  const { addText, space } = useSpace(spaceId);
  const [text, setText] = useState("");

  const submitText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addText(text);
    setText("");
  };
  console.log(space);

  return (
    <>
      <form className="flex gap-4" onSubmit={submitText}>
        <Input
          className="w-full px-4 text-xl"
          placeholder="HelloWorld"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="info" size="lg">
          Submit
        </Button>
      </form>
    </>
  );
};
