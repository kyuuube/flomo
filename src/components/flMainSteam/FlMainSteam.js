import FlMemoItem from '../flMemoItem/FlMemoItem'
function FlMainSteam() {
    const memos = Array(7).fill('').map((item, _index) => _index)
    console.log(memos)
    return <div className="md:min-h-full w-full overflow-y-visible">
        <FlMemoItem />
        {/*{*/}
        {/*    memos.forEach((_item, index) => {*/}
        {/*        return (*/}
        {/*          <FlMemoItem key={index} />*/}
        {/*        )*/}
        {/*    })*/}
        {/*}*/}
    </div>;
}

export default FlMainSteam;
