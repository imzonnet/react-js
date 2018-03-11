import React, {Component} from 'react';
import Note from './Note';
import AddNoteForm from './AddNoteForm';
import SearchNoteForm from './SearchNoteForm';
import './list.css';
import {connect} from 'react-redux';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': 'Toto',
            'notes': this.props.notes
        };
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.searchNote = this.searchNote.bind(this);
    }

    addNote(name) {
        this.props.notes.push(name);
        this.setState({notes:this.props.notes});
    }

    removeNote(index) {
        this.props.notes.splice(index, 1);
        this.setState({notes:this.props.notes});
    }

    searchNote(title) {
        let notes = this.props.notes.filter((e,i) => e.indexOf(title) > -1);
        this.setState({notes: notes});
    }

    render() {
        return (
            <div className="list-todo">
                <h2>{this.state.title}</h2>
                <SearchNoteForm handleSearchNote={this.searchNote}/>
                <div className="list-notes">
                {this.state.notes.map((v, i) => <Note handleRemoveNote={this.removeNote} key={v.id} id={i} title={v.name}/>)}
                </div>
                <AddNoteForm handleAddNote={this.addNote}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(List);
