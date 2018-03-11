import React, {Component} from 'react';

class AddNoteForm extends Component
{
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        let {handleAddNote} = this.props;
        handleAddNote(this.refs.title.value);
        this.refs.title.value = '';
    }

    render() {
        return (
            <div className="add-form">
                <form action="?" onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter note" ref="title"/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default AddNoteForm;