import BraftEditor from 'braft-editor';
import React, { useState } from 'react';
import 'braft-editor/dist/index.css';
import './index.css';

function FlEditor() {
    let [editorState, handleChange] = useState(null);
    let content = null;
    const controls = ['bold', 'italic', 'underline'];
    const htmlContent = editorState ? editorState.toHTML() : null;
    if (htmlContent) {
        content = htmlContent.replace(/<[^>]+>/gi, '');
    }
    let buttonClass = !content
        ? 'absolute bottom-5 right-2 bg-green-600 hover:bg-green-500 bg-opacity-50 text-white py-2 px-4 rounded text-xs'
        : 'absolute bottom-5 right-2 bg-green-500 text-white py-2 px-4 rounded text-xs';
    return (
        <div  className="relative h-28 pt-3 pb-3">
            <BraftEditor
                className=" border-2 border-gray-300 bg-white rounded-lg"
                contentStyle={{ height: 'auto' }}
                controls={controls}
                value={editorState}
                placeholder="现在的想法是..."
                onChange={(v) => handleChange((editorState = v))}
            />
            <button className={buttonClass}>发送</button>
        </div>
    );
}

export default FlEditor;
