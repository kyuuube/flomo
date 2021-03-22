import FlInput from './components/flInput/FlInput';
import FlEditor from './components/flEditor/FlEditor';
import FlAside from './components/flAside/FlAside';
import FlMainSteam from './components/flMainSteam/FlMainSteam';
import FlMemoItem from './components/flMemoItem/FlMemoItem';
import React, { useState, useEffect } from 'react';
import { getMemos } from './apis/memoApi';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './App.css';

const memos = (state) => state.memos;

function App() {
    const { memo } = useSelector(memos, shallowEqual);
    console.log(memo);
    const dispatch = useDispatch();
    const [memoList, setMemo] = useState(null);
    const [loading, setLoading] = useState(false);
    async function loadMemos() {
        setLoading(true);
        const { list } = await getMemos().catch((e) => e);
        setLoading(false);
        console.log(loading);
        setMemo(list);
        dispatch({ type: 'memo/memosChanged', payload: { changeType: 'refresh', memo: list } });
    }
    useEffect(() => {
        loadMemos();
    });
    // const memos = Array(3)
    //     .fill('')
    //     .map((item, _index) => ({
    //         picture: ['https://ftp.bmp.ovh/imgs/2021/03/137101508a6af1ee.jpg'],
    //         memo: 'La Roche-Posay Laboratoire Dermatologique',
    //         tag: ['笔芯'],
    //         createTime: '',
    //     }));
    return (
        <div className="w-full h-screen bg-gray-50 dark:bg-gray-800">
            <section className="container flex min-h-full bg-gray-50 dark:bg-gray-800">
                <aside className="w-aside h-screen">
                    <FlAside />
                </aside>
                <main className="w-main box-border h-screen px-4">
                    <header className="flex justify-between pt-3">
                        <span className="Redressed text-3xl">memo</span>
                        <FlInput />
                    </header>
                    <FlEditor />
                    <FlMainSteam loading={false}>
                        {memoList && memoList.length > 0
                            ? memoList.map((_item, index) => {
                                  return <FlMemoItem key={index} id={index} item={_item} />;
                              })
                            : null}
                    </FlMainSteam>
                </main>
            </section>
        </div>
    );
}

export default App;
