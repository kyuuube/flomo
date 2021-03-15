import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#82cab4' }} spin />;

function changeHeight(f) {
    const $clientHeight = document.body.clientHeight;
    const $headerHeight = document.querySelector('header').getBoundingClientRect().height;
    f($clientHeight - $headerHeight);
}

// 如果使用解构赋值竟然没法渲染出来
function FlMainSteam({ loading, children }) {
    const [height, setHeight] = useState(0);
    const [loadingState, setLoading] = useState(false);
    useEffect(() => {
        setLoading(loading);
        // Update the document title using the browser API
        changeHeight(setHeight);
        window.addEventListener('resize', () => changeHeight(setHeight));
    }, [loading]);
    const listStyle = {
        height: `${height}px`,
    };
    return loadingState ? (
        <div style={listStyle} className="flex justify-center items-center content-center w-full">
            <div className='h-4 w-4'>
                <Spin indicator={antIcon} />
            </div>
        </div>
    ) : (
        <div style={listStyle} className="w-full overflow-y-scroll px-4">
            {children ? children : ''}
        </div>
    );
}

export default FlMainSteam;
