import React from 'react';

function Loader(props) {
    let display = props.isLoading ? 'block' : 'none';
    return(
        <p style={{ display }} className="loading">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            <br /> Loading...
        </p>
    );
}

export default Loader;