import React, { Component, useState } from 'react';

class Secrets extends Component {
    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm />
                <SecretsList />
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
        console.log('do something with this secret', content);
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onInput={ _handleInput }></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            secrets list coming soon
        </div>
    )
};

export default Secrets;
