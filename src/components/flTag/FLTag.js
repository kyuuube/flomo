// eslint-disable-next-line
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
function FlTag() {
    const dispatch = useDispatch();
    const handleTagClick = (tag) => {
      dispatch({ type: 'memo/filter', payload: { selectTag: tag } });
    }
    return (
        <div className="mt-6">
            <div className="pl-7 text-xs text-current font-light">标签</div>
            <div className="mt-4">
                <div onClick={() => handleTagClick('笔芯')} className="relative flex items-center rounded-lg cursor-pointer hover:bg-gray-200 pl-7 h-8 text-sm text-gray-400 font-light">
                    <span># 笔芯</span>
                    {/*<i className="ri-more-line absolute top-1/2 -mt-2 right-2" />*/}
                </div>
                <div  onClick={() => handleTagClick('欢迎')} className="relative flex items-center rounded-lg cursor-pointer hover:bg-gray-200 pl-7 h-8 text-sm text-gray-400 font-light">
                    <span># 欢迎</span>
                    {/*<i className="ri-more-line absolute top-1/2 -mt-2 right-2" />*/}
                </div>
            </div>
        </div>
    );
}

export default FlTag;
