import React, { Component } from 'react'
import MaterialIcon from 'react-google-material-icons'

import './NotesList.css'


export default class NotesListItem extends Component {
    render() {
        const {
            deleteNote,
            activeNote,
            active,
            date
        } = this.props

        let classNames = 'list-group-item-wrap';
        if(active) {
            classNames += ' active';
        }

        return ( 
            <span className={ classNames } onClick={ activeNote }>
                <MaterialIcon icon='text_snippet' size='18' />
                <div className='item-info'>
                    <span className='item-label'>New note</span>
                    { date }
                </div>
                <div className='btn-group'>
                    <button type='button' className='btn btn-outline-danger btn-small'><MaterialIcon icon='edit' size='18' /></button>
                    <button type='button' className='btn' onClick={ deleteNote }><MaterialIcon icon='delete' size='18' /></button>
                </div>
            </span>
        )
    }
}