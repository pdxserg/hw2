const initState = {
    themeId: 1,
}
type InitialStateType= typeof initState
export const themeReducer = (state:InitialStateType = initState, action: any): InitialStateType => { // fix any
    switch (action.type) {
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionsTypes= ReturnType<typeof changeThemeId>