import React, { Component } from 'react'

class LeaderBoard extends Component {
    render() {
        let rows = []
        this.props.data.forEach(element => {
            rows.push(<tr>
                <td>{element.get('rank')}</td>
                <td>{element.get('participants')}</td>
                <td>{element.get('total_score')}</td>
                <td>{element.get('attemps')}</td>
                <td>{element.get('lastSubmitted')}</td>
            </tr>)
        });
        return (
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Participants</th>
                            <th>Total Score (50)</th>
                            <th>Attemps</th>
                            <th>Last Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                       {rows}
                    </tbody>
                </table>
        )
    }
}

export default LeaderBoard