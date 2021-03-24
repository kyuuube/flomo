import FlInput from './components/flInput/FlInput';
import FlEditor from './components/flEditor/FlEditor';
import FlAside from './components/flAside/FlAside';
import FlMainSteam from './components/flMainSteam/FlMainSteam';
import FlMemoItem from './components/flMemoItem/FlMemoItem';
import React, { useState, useEffect } from 'react';
import { getMemos } from './apis/memoApi';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './App.css';

const memosSelector = (state) => state.memos;

function App() {
    const { memos, selectTag } = useSelector(memosSelector, shallowEqual);
    const dispatch = useDispatch();
    const [memoList, setMemo] = useState(null);
    const [loading, setLoading] = useState(false);
    async function loadMemos() {
        setLoading(true);
        const { list } = await getMemos().catch((e) => e);
        setLoading(false);
        dispatch({ type: 'memo/memosChanged', payload: { changeType: 'refresh', memo: list } });
    }
    useEffect(() => {
        loadMemos();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        setMemo(memos);
    }, [memos]);
    useEffect(() => {
        setMemo(selectTag ? memos.filter((memo) => memo.tag.find((tag) => tag === selectTag)) : memos )
    }, [selectTag, memos]);
    const handleLogoClick = () => {
        dispatch({ type: 'memo/filter', payload: { selectTag: null } });
    }
    return (
        <div className="w-full h-screen bg-gray-50 dark:bg-gray-800">
            <section className="container flex min-h-full bg-gray-50 dark:bg-gray-800">
                <aside className="w-aside h-screen">
                    <FlAside />
                </aside>
                <main className="w-main box-border h-screen desktop:px-4 px-2">
                    <header className="flex justify-between pt-3">
                        <span onClick={() => handleLogoClick()} className="Redressed text-3xl cursor-pointer">memo</span>
                        <FlInput />
                    </header>
                    <FlEditor />
                    <FlMainSteam loading={loading}>
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
