import FlUserHeader from '../flUserHeader/FlUserHeader';
import FlStatistic from '../flStatistic/FlStatistic';
import FLTag from '../flTag/FLTag';
function FlAside() {
    return (
        <div>
            <FlUserHeader />
            <FlStatistic />
            <div className="w-full">
                <div className="flex bg-green-400 text-white rounded-lg w-full py-2 pl-7 text-sm cursor-pointer">
                    <i className="ri-layout-grid-fill pr-2" />
                    <span>memo</span>
                </div>
                <div className="flex w-full py-2 pl-7 text-gray-500 text-sm cursor-pointer">
                    <i className="ri-message-2-fill pr-2" />
                    <span>微信输入</span>
                </div>
                <div className="flex w-full py-2 pl-7 text-gray-500 text-sm cursor-pointer">
                    <i className="ri-calendar-todo-fill pr-2" />
                    <span>每日回顾</span>
                </div>
                <div className="flex w-full py-2 pl-7 text-gray-500 text-sm cursor-pointer">
                    <i className="ri-run-line pr-2" />
                    <span>随机漫步</span>
                </div>
            </div>
            <FLTag />
        </div>
    );
}

export default FlAside;
