import React from 'react';

function Input(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="input-wrapper" style={{ border: props.searchOk === true ? '0.5px solid #3ae5d4' : (props.searchOk === false ? '0.5px solid #f05656' : null ) }}>
                    <input 
                        type="text" 
                        className="input-style"                    
                        placeholder="Search shows.." 
                        value={props.value} onChange={props.handleChange} 
                    />
                    <button id="bold" className="button-style" type="submit"><i className='fa fa-search'></i></button>
                </div>
            </form>
        </div>
    );
}
export default Input;