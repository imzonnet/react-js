import React, {Component} from 'react';

class SearchNoteForm extends Component
{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        let {handleSearchNote} = this.props;
        handleSearchNote(this.refs.key.value);
    }

    render() {
        return (
            <div className="search-form">
                <input type="text" placeholder="Find a note" ref="key" onChange={this.onChange}/>
            </div>
        );
    }
}

export default SearchNoteForm;