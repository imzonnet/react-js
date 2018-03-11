import React, {Component} from 'react';

class Note extends Component
{
    constructor(props) {
        super(props);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote() {
        let handleRemoveNote = this.props.handleRemoveNote;
        handleRemoveNote(this.props.id);
    }

    render() {
        return (
            <div className="note">
                <h4>
                    <span>{this.props.title}</span>
                    <button onClick={this.handleRemoveNote}>Delete</button>
                </h4>
            </div>
        );
    }
}

export default Note;