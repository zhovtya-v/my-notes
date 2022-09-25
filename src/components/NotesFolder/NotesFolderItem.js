import React, { Component } from 'react'
import MaterialIcon from 'react-google-material-icons'

import './NotesFolder.css'


export default class NotesFolderItem extends Component {
    render() {
        const {
            deleteFolder,
            activeFolder,
            active
        } = this.props

        let classNames = 'list-group-item-wrap';
        
        if(active) {
            classNames += ' active';
        }

        return ( 
            <span className={ classNames } onClick={ activeFolder }> 
                <MaterialIcon icon='folder_open' size='18' />
                <span className='toto-list-item-label'>New folder</span>
                <span className='btn-group'>
                    <button type='button' className='btn'><MaterialIcon icon='edit' size='18' /></button>
                    <button className='btn' onClick={ deleteFolder }><MaterialIcon icon='delete' size='18' /></button>
                </span>
            </span>
        )
    }
}