import React from 'react';
import ReactDom from 'react-dom';
import ParentApp from './tool';

document.addEventListener('DOMContentLoaded', function(){
    ReactDom.render(<ParentApp />, document.getElementById('ui-build-container'));
})