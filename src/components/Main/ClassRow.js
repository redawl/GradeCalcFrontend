import React from 'react';

class ClassRow extends React.Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <tr>
                <td><a href={`/class?class=${this.props.classObj.className}`}>{this.props.classObj.className}</a></td>
            </tr>
        )
    }
}

export default ClassRow;