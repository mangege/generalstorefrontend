import React from 'react';

function Toast(props) {
    return (
        <div className="position-fixed" style={{ top: 0, right: 0, zIndex: 2 }}>
            <div className="alert alert-success mt-2 mr-2">
                {props.tips}
            </div>
        </div>
    );
}

export default Toast;