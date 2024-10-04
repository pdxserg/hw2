const initState = {
    themeId: 2,
}
type InitialStateType= typeof initState
export const themeReducer = (state:InitialStateType = initState, action: ActionsTypes): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case'SET_THEME_ID':{

            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number)=> ({ type: 'SET_THEME_ID', id }) // fix any

type ActionsTypes= ReturnType<typeof changeThemeId>