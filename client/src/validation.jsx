import React from 'react';
import { HelpBlock } from 'react-bootstrap';

const required = (value) => {
    if (!value.toString().trim().length) {
        return <HelpBlock>This field is required.</HelpBlock>;
    }
};

const email = (value) => {
    if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        .test(value)) {
        return <HelpBlock>This field must be a valid email.</HelpBlock>;
    }
};

const checkLength = (value, props) => {
    if(value.length < props.minLength) {
        return <HelpBlock>Password must be at least {props.minLength}  characters long. </HelpBlock>
    }
}

const password = (value, props, components) => {

    if(value !== components['password'][0].value) {
        return <HelpBlock>The passwords must match.</HelpBlock>
    }

};

// don't allow submit of the form if there are errors/disable button

export {required, email, password, checkLength};