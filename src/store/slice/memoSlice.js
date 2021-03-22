const initialState = {
    memos: [],
};

export default function memoReducer(state = initialState, action) {
    switch (action.type) {
        case 'memo/memosChanged': {
            let { memo, changeType } = action.payload;
            const { memos } = state;

            switch (changeType) {
                case 'added': {
                    if (memos.includes(memo)) {
                        // This color already is set as a filter. Don't change the state.
                        return state;
                    }

                    return {
                        ...state,
                        memos: state.memos.concat(memo),
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
        default:
            return state;
    }
}
