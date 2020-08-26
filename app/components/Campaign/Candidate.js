import React from "react";

class Candidate extends React.Component {
    render() {
        return (
            <div class="card text-center">

                <div class="card-body">
                    <h5 class="card-title">Obama</h5>
                    <a class="btn btn-primary">Vote</a>
                </div>

                <div class="card-footer text-muted">
                    <span>52%</span><p>991/1.8k</p>
                </div>

            </div>
        )
    }
}

export default Candidate;