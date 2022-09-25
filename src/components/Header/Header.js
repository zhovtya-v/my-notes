import React, { Component } from "react";
import MaterialIcon from 'react-google-material-icons'

import './Header.css'


export default class Header extends Component {
	render() {
		const {
			addFolder,
			addNote,
			activeFolder
		} = this.props;

		let classNames = 'btn';
        if(activeFolder === null) {
            classNames += ' disabled';
        }

		return (
			<div className="header-wrap">
				<div className="btn-group">
					<button className="btn" onClick={addFolder}><MaterialIcon icon='create_new_folder' size='36' />Add nem folder</button>
					<button className={ classNames } onClick={ addNote }  ><MaterialIcon icon='note_add' size='36' />Add notes</button>
				</div>
			</div>
		)
	}
    
}