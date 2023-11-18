import React, { useCallback } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";

const TOOLBAR_OPTIONS = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['image','blockquote', 'code-block'],           // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6,7,8, false] }],
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean']
];

export default function TextEditor() {
  const wrapperRef = useCallback((wrapper) => {
    if(wrapper==null)return
    wrapperRef.innerHTML = ""
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow" ,modules:{toolbar:TOOLBAR_OPTIONS}});
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
}
