type InitStateTtype = {
    isLoading: boolean,
}

const initState:InitStateTtype = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateTtype => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {isLoading:action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE_LOADING',
        isLoading,
    } as const
}
