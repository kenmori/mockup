import React from 'react';
import ReactDom from 'react-dom';

var  HelloReact = React.createClass({
    render: function (){
        return (
            <div>
                fafHello React !!
            </div>
        );
    }
});


ReactDom.render(
    <HelloReact />,
    document.querySelector('.content')
);