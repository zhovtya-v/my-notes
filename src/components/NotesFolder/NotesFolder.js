import React from "react";

import NotesFolderItem from './NotesFolderItem'

const NotesFolder = ({
    folders,
    activeFolder,
    deleteFolder
}) => {
    const elements = folders.map((item, index) => {

        const { id, ...itemProps } = item;

        return (
            <li key={index} id={id} className='list-group-item'>
                <NotesFolderItem 
                    { ...itemProps}
                    index = { index }
                    activeFolder = { () => activeFolder(id) }
                    deleteFolder = { () => deleteFolder(id) }
                />
            </li>);
    });

    return (
        <ul className='list-group todo-list'>{elements}</ul>
    )
}
 
export default NotesFolder;