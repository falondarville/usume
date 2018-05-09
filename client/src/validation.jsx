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

export {required, email};