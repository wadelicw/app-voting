import React from "react";

class Candidate extends React.Component {
    render() {
        return (
            <div class="card text-center">
                <div class="card-header">
                    Candidate &nbsp; {this.props.number}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    <button
                        class="btn btn-primary"
                        onClick={this.props.onClick}
                    >Vote</button>
                </div>

                <div class="card-footer text-muted">
                    <span>{this.props.percentage > 0 ? this.props.percentage : 0}%</span>
                    <p>{this.props.numOfVote}/{this.props.totalVote}</p>
                </div>
            </div>
        )
    }
}

export default Candidate;