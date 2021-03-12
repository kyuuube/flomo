function FlTag() {
    return (
        <div className="mt-6">
            <div className="pl-7 text-xs text-current font-light">标签</div>
            <div className="mt-4">
                <div className="relative flex items-center rounded-lg cursor-pointer hover:bg-gray-200 pl-7 h-8 text-sm text-gray-400 font-light">
                    <span># 笔芯</span>
                    {/*<i className="ri-more-line absolute top-1/2 -mt-2 right-2" />*/}
                </div>
                <div className="relative flex items-center rounded-lg cursor-pointer hover:bg-gray-200 pl-7 h-8 text-sm text-gray-400 font-light">
                    <span># 欢迎</span>
                    {/*<i className="ri-more-line absolute top-1/2 -mt-2 right-2" />*/}
                </div>
            </div>
        </div>
    );
}

export default FlTag;
