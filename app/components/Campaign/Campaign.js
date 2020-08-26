import React from "react";
import Candidate from "./Candidate.js"

class Campaign extends React.Component {
    render() {
        return (
            <div >
                <div>
                    <h3>Who will be the president of USA</h3>
                </div>

                <div>
                    <Candidate
                        number="1"
                        name="Donald Trump"
                        percentage="52"
                        numOfVote="991"
                        totalVote="1800"
                    />
                    <Candidate
                        number="2"
                        name="Joe Biden"
                        percentage="52"
                        numOfVote="991"
                        totalVote="1800"
                    />
                </div>
            </div>
        )
    }
}

export default Campaign;