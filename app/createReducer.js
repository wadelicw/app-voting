function createReducer(initState = {}, actionHandler) {
    return function (state = initState, action) {
        if (actionHandler.hasOwnProperty(action.type))
            return actionHandler[actionHandler.type](state, action);
        return state;
    }
}

module.exports = createReducer;