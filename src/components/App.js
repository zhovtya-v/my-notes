import React, { Component } from 'react'
import Header from './Header/Header'
import NotesFolder from './NotesFolder/NotesFolder'
import NotesList from './NotesList/NotesList'
import FormAddingNote from './FormAddingNote/FormAddingNote'

import './App.css'

export default class App extends Component {
  
  maxFolderId = 0
  maxNoteId = 0

  state = {
    folders: [],
    notes: [],
    noteContent: [],
    activeFolder: null,
    activeNote: null
  }

  renderDate(newDate, separator='/'){
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();  

    return <span className='data-wrap'>{ `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}` }, { `${hours}:${minutes}:${seconds}` }</span>
  }

  createNote(label, folderId) {
    return {
      label,
      active: false,
      id: this.maxNoteId++,
      folderId: folderId,
      date: this.renderDate(new Date())
    }
  }

  createItem(label) {
    return {
        label,
        active: false,
        id: this.maxFolderId++
    }
  }

  createContent(label, noteId) {
    return {
        label,
        noteId: noteId
    }
  }

  addFolder = ( text ) => {
    const newFolder = this.createItem(text)

    this.setState( ({ folders }) => {
      const newArray = [
          ...folders,
          newFolder
      ]

      return {
        folders: newArray
      }
    })
  }

  addNote = ( text ) => {
    const newNote = this.createNote(text, this.state.activeFolder)

    this.setState( ({ notes }) => {
      const newArray = [
          ...notes,
          newNote
      ]

      return {
        notes: newArray
      }
    })
  }

  deleteFolder = (id) => {
    const index = this.state.folders.findIndex((el) => el.id === id)

    const newFoldersArray = [
      ...this.state.folders.slice(0, index),
      ...this.state.folders.slice(index + 1)
    ]

    this.setState( () => {
      return {
        folders: newFoldersArray
      }
    })

    const folderNotes = this.getFolderNotes( id );

    folderNotes.forEach( (item) => {
      this.deleteNote( item.id )
    })
  }

  deleteNote = (id) => {
    this.setState( ({ notes }) => {
      const index = notes.findIndex((el) => el.id === id)

      const newArray = [
          ...notes.slice(0, index),
          ...notes.slice(index + 1)
      ]

      return {
        notes: newArray
      }
    })
  }

  activeFolder = (id) => {
    this.setState(( {folders} ) => {
      return {
        folders: folders.map(function(item, index) {
          if (item.id !== id) {
            item['active'] = false;
          }
          else {
            item['active'] = true;
          }

          return item;
        }),
        activeFolder: id
      }
    })
  }

  activeNote = (id) => {
    this.setState(( { notes } ) => {
      return {
        notes: notes.map(function(item, index) {
          if (index !== id) {
            item['active'] = false;
          }
          else {
            item['active'] = true;
          }
    
          return item;
        }),
        activeNote: id
      }
    })
  }

  getNotesToShowing = () => {
    return this.getFolderNotes(this.state.activeFolder);
  }

  getFolderNotes = ( id ) => {
    return this.state.notes.filter(item => {
      return item.folderId === id;
    });
  }


  render() {
    const { folders } = this.state

    const notes = this.getNotesToShowing();

    return (
      <div className="App">

        <Header addFolder={ this.addFolder } addNote={ this.addNote } activeFolder={ this.state.activeFolder } />

        <div className='folders-wrap'>
          <NotesFolder folders={ folders } addFolder={ this.addFolder } activeFolder={ this.activeFolder } deleteFolder={ this.deleteFolder } />
        </div>

        <div className='notes-wrap'>
          <NotesList notes={ notes } addNote={ this.addNote } activeNote={ this.activeNote } deleteNote={ this.deleteNote } />
          <FormAddingNote addNoteContent={ this.addNoteContent } activeNote={ this.state.activeNote }/>
        </div>
      </div>
    );
  }
}
