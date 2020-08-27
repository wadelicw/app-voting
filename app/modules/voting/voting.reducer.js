import createReducer from "../../createReducer.js";

const getInitState = () => ({
    votesOfCandidate: [0, 0],
    totalVotes: 0
})

const initState = getInitState();

const actionHandlers = {
    VOTE: (state, action) => {
        const result = {...state};
        result.totalVotes += 1;
        result.votesOfCandidate[action.candidate - 1] +=1 ;
        return result;
    }
}

export default createReducer(initState, actionHandlers);