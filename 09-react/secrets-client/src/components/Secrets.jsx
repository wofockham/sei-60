import React, { Component, useState } from 'react';
import axios from 'axios';

const SECRETS_URL = 'http://localhost:3000/secrets.json'; // Later: change this to the deployed (e.g. Heroku) URL

class Secrets extends Component {
    constructor() {
        super();
        this.state = {
            secrets: []
        };
        this.saveSecret = this.saveSecret.bind(this);
    }

    // React life cycle method:
    componentDidMount() {
        const fetchSecrets = () => {
            axios.get(SECRETS_URL).then((response) => {
                this.setState({secrets: response.data}); // set the data from the API as our state
                setTimeout(fetchSecrets, 7000); // recursion for polling
            });
        };

        fetchSecrets();
    }

    saveSecret(content) {
        // save the secret to the server via AJAX
        axios.post(SECRETS_URL, { content: content }).then((response) => {
            // save the new secret fresh the db into our state
            this.setState({secrets: [response.data, ...this.state.secrets]});
        });
    }

    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm onSubmit={ this.saveSecret } />
                <SecretsList secrets={ this.state.secrets } />
            </div>
        );
    }
}

const SecretForm = (props) => {
    const [content, setContent] = useState('');
    const _handleInput = (e) => {
        setContent(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content); // share our state back up to our parent
        setContent(''); // empty the text area for the next disgusting secret
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onInput={ _handleInput } value={ content }></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            { props.secrets.map((s) => <p key={s.id}>{s.content}</p>) }
        </div>
    )
};

export default Secrets;
