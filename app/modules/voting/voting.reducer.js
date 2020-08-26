import createReducer from "../../createReducer.js";

const initState = {
    votesOfCandidate: [0, 0],
    totalVotes: 0
}

const actionHandlers = {
    VOTE: (state, action) => {
        const result = {...state};
        result.totalVotes += 1;
        result.votesOfCandidate[action.candidate - 1];
    }
}

export default createReducer(initState, actionHandlers);