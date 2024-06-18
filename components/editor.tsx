"use client";

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
];

interface IEditor {
    content: string;
    setContent: (prev: any) => void;
}
function Editor({ content, setContent }: IEditor) {

    if (typeof window !== 'undefined') {
        return (
            <ReactQuill theme="snow" value={content} onChange={setContent}
                placeholder=''
                id="content"
                modules={modules}
                formats={formats}
            />
        )
    } else {
        return 'Hello'
    }

}

export default Editor