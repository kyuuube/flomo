const initialState = {
    memos: [],
    selectTag: null
};

export default function memoReducer(state = initialState, action) {
    switch (action.type) {
        case 'memo/memosChanged': {
            let { memo, changeType } = action.payload;
            switch (changeType) {
                case 'added': {
                    return {
                        ...state,
                        memos: [...memo, ...state.memos],
                    };
                }
                case 'removed': {
                    return {
                        ...state,
                        memos: state.memos.filter((existingMemo) => existingMemo !== memo),
                    };
                }
                case 'refresh': {
                    return {
                        ...state,
                        memos: memo,
                    };
                }
                default:
                    return state;
            }
        }
        case 'memo/filter': {
            let { selectTag } = action.payload;
            return {
                ...state,
                selectTag: selectTag,
            };
        }
        default:
            return state;
    }
}
