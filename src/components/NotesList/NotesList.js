import React from "react";

import NotesListItem from './NotesListItem'

const NotesList = ({
    notes,
    activeNote,
    deleteNote
}) => {
    const elements = notes.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id} id={id} className='list-group-item'>
                <NotesListItem 
                    { ...itemProps}
                    activeNote = { () => activeNote(id) }
                    deleteNote = { () => deleteNote(id) }
                />
            </li>);
    });

    return (
        <ul className='list-group todo-list'>{elements}</ul>
    )
}
 
export default NotesList;