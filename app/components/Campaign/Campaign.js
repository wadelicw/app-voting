import React from "react";
import Candidate from "./Candidate.js"
import { action } from "../../modules/index.js";
import { connect } from "react-redux";

@connect(
    // mapStateToProps
    state => ({
        votesOfCandidate: state.voting.votesOfCandidate,
        totalVotes: state.voting.totalVotes
    }),
    // mapDispatchToProps
    dispatch => ({
        voting: (number) => dispatch(action.voting.voting(number))
    })
)

class Campaign extends React.Component {
    render() {
        const { votesOfCandidate, totalVotes, voting } = this.props;
        return (
            <div >
                <div>
                    <h3>Who will be the president of USA</h3>
                </div>

                <div>
                    <Candidate
                        number="1"
                        name="Donald Trump"
                        percentage={(Math.floor(votesOfCandidate[0] / totalVotes * 100))}
                        numOfVote={votesOfCandidate[0]}
                        totalVote={totalVotes}
                        onClick={() => voting(1)}
                    />
                    <Candidate
                        number="2"
                        name="Joe Biden"
                        percentage={(Math.floor(votesOfCandidate[1] / totalVotes * 100))}
                        numOfVote={votesOfCandidate[1]}
                        totalVote={totalVotes}
                        onClick={() => voting(2)}
                    />
                </div>
            </div>
        )
    }
}

export default Campaign;