import React, { Component } from "react"


export default class FormAddingNote extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addNoteContent( this.state.label )
        this.setState({
            label: ''
        })
    }

    render() {
        const { activeNote } = this.props

        if( activeNote !== null ) {

            return (
                <form className="item-add-form"
                        onSubmit={ this.onSubmit }>
    
                    <input type="text"
                            className='form-control'
                            onChange={ this.onLabelChange }
                            placeholder="Content"
                            value={ this.state.label } />
    
                    <button type="submit" className="btn btn-outline-secondary ">Add item</button>
                </form>
            )
        } else {
            return ''
        }
        
    }
}