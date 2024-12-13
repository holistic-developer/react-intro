import { useState } from "react";

export const NewPost = () => {
  const [content, setContent] = useState("");

  const tooLong = content.length > 30;

  const sendPost = () => alert(content)

  console.log("rendering, content: " + content);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <input
        type="text"
        maxLength={200}
        size={30}
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="What are you thinking about?"
      />
      {tooLong && <span>Too many characters</span>}
      <button disabled={tooLong} onClick={() => sendPost()}>Send</button>
    </div>
  );
};