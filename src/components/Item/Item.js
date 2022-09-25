import React from "react";
import MaterialIcon from 'react-google-material-icons'

import './Item.css'


const Item = ( props ) => {
    return (
        <div className="folder">
            <i ></i>
            <div>Name { props.name }</div>
            <button><MaterialIcon icon='edit' size='36' />Add nem folder</button>
            <button><MaterialIcon icon='delete' size='36' />Add nem folder</button>
        </div>
    )
}
 
export default Item;