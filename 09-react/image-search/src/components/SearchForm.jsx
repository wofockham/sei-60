import React, { Component } from 'react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        };
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleInput = this._handleInput.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    _handleInput(event) {
        this.setState({query: event.target.value});
    }

    render() {
        return (
            <form onSubmit={ this._handleSubmit }>
                <input type="search" required placeholder="butterfly" onChange={ this._handleInput } />
                <input type="submit" value={ `Search for ${ this.state.query }` } />
            </form>
        );
    }
}

export default SearchForm;