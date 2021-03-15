import dayjs from 'dayjs';
import { Tooltip } from 'antd';
import './index.css';

const quarterOfYear = require('dayjs/plugin/quarterOfYear');
dayjs.extend(quarterOfYear);

function FlCalendarGraph() {
    let graphList = [];
    let memoDays = ['01-12']
    const currentDay = dayjs().format('MM-DD')
    const endOfThisWeek = +dayjs().endOf('week');
    const startOfRecentQuarter = dayjs(endOfThisWeek).subtract(84, 'day').startOf('day');
    let quarterList = [];
    for (let i = 0; i <= 84; i++) {
        let aDay = dayjs(startOfRecentQuarter).add(i, 'day').format('MM-DD');
        quarterList.push(aDay);
    }
    for (let i = 0; i <= quarterList.length - 1; i++) {
        if (i % 7 === 0 && i !== 0) {
            let week = quarterList.slice(i - 7, i);
            graphList.push(week);
        }
    }

    return (
        <div className="calendar-graph">
            {graphList.map((item, index) => {
                return (
                    <div key={index} className="week">
                        {item.map((day, index) => {
                            const dayStyle = {
                              borderColor: day === currentDay ? '#55BB8E' : 'transparent',
                              backgroundColor: memoDays.find(d => day === d) ? '#55BB8E' : '#EFEFEF'
                            }
                            return (
                                <Tooltip key={index} placement="top" title={day}>
                                    <div style={dayStyle} className="day" />
                                </Tooltip>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
export default FlCalendarGraph;
