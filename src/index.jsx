'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CartItemComponent from './components/cart-item';
import UrlInputComponent from './components/url-input';

const MainComponent = React.createClass({

    getInitialState: function() {
        return {
            cartItems: []
        };
    },

    loadDataFromServer: function () {
        var that = this;

        window.getSnacks().then(function(snackRecords) {
            var snack = {}; 
            var snacks = [];
            
            for (var key in snackRecords) {
                snack = snackRecords[key];
                snack.id = key;
                snacks.push(snack);
            }

            console.log(snacks);
            
            that.setState({ cartItems: snacks });
        });
    },

    componentDidMount: function() {
        this.loadDataFromServer();
    },

    onSuccess: function() {
        this.loadDataFromServer();
    },

    render: function() {
        console.log('rendering component...');

        return (
            <div className='components-container'>
                <UrlInputComponent onSuccess={this.onSuccess} />
                {this.state.cartItems.map(cartItem => {
                    return (
                        <div key={cartItem.id}>
                            <CartItemComponent 
                                title={cartItem.name}
                                price={cartItem.price}
                                image={cartItem.imageUrl}
                                url={cartItem.sourceUrl} />
                        </div>
                    );
                })}
            </div>
        );
    }
});

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('main-component')
);

