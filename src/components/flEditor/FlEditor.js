import BraftEditor from 'braft-editor';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined, PictureOutlined } from '@ant-design/icons';
import { ContentUtils } from 'braft-utils'
import 'braft-editor/dist/index.css';
import './index.css';

function FlEditor() {
    const dispatch = useDispatch();
    let editorInstance = null;
    let [editorState, handleChange] = useState(BraftEditor.createEditorState(null));
    // eslint-disable-next-line no-unused-vars
    let [loading, handleLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    let [imageUrl, handleImageUrl] = useState('');
    let [fileList, handleFileList] = useState([]);
    let content = null;
    const controls = ['list-ul', 'list-ol', 'bold', 'underline'];
    const uploadHandler = (param) => {
        console.log(param);
        // if (!param.file) {
        //     console.log(param)
        // }
        handleFileList([...fileList, { ...param }]);
    };
    const insertTag = () => {
        console.log('insert');
        handleChange(ContentUtils.insertText(editorState, '#'))
    };
    const extendControls = [
        {
            key: 'custom-button',
            type: 'button',
            text: '#',
            title: '标签',
            onClick: insertTag,
        },
        {
            key: 'uploader',
            type: 'component',
            component: (
                <Upload
                    accept="image/*"
                    fileList={fileList}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={() => uploadHandler()}
                    showUploadList={false}
                >
                    {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
                    <button type="button" className="control-item button upload-button" data-title="插入图片">
                        <PictureOutlined />
                    </button>
                </Upload>
            ),
        },
    ];
    const htmlContent = editorState ? editorState.toHTML() : null;
    if (htmlContent) {
        content = htmlContent.replace(/<[^>]+>/gi, '');
    }
    let buttonClass = !content
        ? 'absolute bottom-2 right-2 bg-green-600 hover:bg-green-500 bg-opacity-50 text-white py-2 px-4 rounded text-xs z-50 focus:outline-none'
        : 'absolute bottom-2 right-2 bg-green-500 text-white py-2 px-4 rounded text-xs z-50 focus:outline-none';

    const handleSubmitClick = () => {
        if (!content) return;
        const memoItem = {
            id: Date.now(),
            createTime: Date.now(),
            memo: content,
            tag: ['笔芯'],
            picture: ['https://ftp.bmp.ovh/imgs/2021/03/137101508a6af1ee.jpg'],
        };

        dispatch({ type: 'memo/memosChanged', payload: { memo: [memoItem], changeType: 'added' } });
        editorInstance.clearEditorContent();
    };

    const uploadButton = <div className="flex">{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>;

    return (
        <div id="editor" className="relative h-min200 mt-3 mb-3 desktop:mx-4 mx-2 p-2 border-2 rounded-lg bg-white border-gray-300">
            <BraftEditor
                ref={(instance) => {
                    editorInstance = instance;
                }}
                contentStyle={{ height: 'auto' }}
                controls={controls}
                extendControls={extendControls}
                value={editorState}
                placeholder="现在的想法是..."
                onChange={(v) => handleChange(v)}
            />
            {/*<div className="ml-2">*/}
            {/*    <Upload*/}
            {/*        listType="picture-card"*/}
            {/*        className="avatar-uploader"*/}
            {/*        fileList={fileList}*/}
            {/*        headers={{*/}
            {/*            Authorization: 'F0fGTlQuhoDxEd5CYiVXpIx7Pth73AxC',*/}
            {/*            ContentType: 'multipart/form-data',*/}
            {/*            Origin: 'http://localhost',*/}
            {/*            AccessControlRequestMethod: 'post',*/}
            {/*            AccessControlRequestHeaders: 'X-Requested-With',*/}
            {/*        }}*/}
            {/*        action="https://sm.ms/api/v2/upload"*/}
            {/*    >*/}
            {/*        {fileList.length >= 4 ? null : uploadButton}*/}
            {/*    </Upload>*/}
            {/*</div>*/}
            {fileList.length > 0 && (
                <div className="ml-2">
                    <Upload
                        listType="picture-card"
                        className="avatar-uploader"
                        fileList={fileList}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    >
                        {fileList.length >= 4 ? null : uploadButton}
                    </Upload>
                </div>
            )}
            <button onClick={() => handleSubmitClick()} className={buttonClass}>
                发送
            </button>
        </div>
    );
}

export default FlEditor;
