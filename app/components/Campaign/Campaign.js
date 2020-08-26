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
                    <Candidate/>
                </div>

            </div>

        )
    }
}

export default Campaign;