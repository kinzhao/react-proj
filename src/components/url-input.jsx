'use strict';

import React from 'react';

const urlInput = React.createClass({

    getInitialState: function() {
        return {
            inputValue: ''
        }
    },

    addToCart: function(e) {
        this.setState({ inputValue: e.target.value });

        // clear field after small delay
        setTimeout(() => {
            this.setState({ inputValue: '' });
        }, 500);

        $.ajax({
            url: '/cart',
            dataType: 'json',
            type: 'POST',
            data: {
                productUrl: e.target.value
            },
            success: data => {
                window.addSnack(data.title, data.imageUrl, data.price, data.productUrl);
                this.setState({ inputValue: '' });
                this.props.onSuccess();
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, xhr.responseText, err.toString());
            }
        });
    },

    render: function() {
        return (
            <div className="col-lg-6">
                <div className="input-group">
                    <input 
                        value={this.state.inputValue}
                        type="text"
                        className="snack-url-input form-control" 
                        placeholder="paste snack url here..." 
                        onChange={this.addToCart} />
                </div>
            </div>
        );
    }
});

module.exports = urlInput;
