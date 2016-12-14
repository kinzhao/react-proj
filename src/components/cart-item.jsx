'use strict';

import React from 'react';

const cartItem = React.createClass({

    render: function() {
        return (
            <div className='content'>
              <table id="dataHeader">
                <tbody>
                    <tr>
                        <th style={{width: '60px', textAlign : 'center'}}>Ranking</th>
                        <th style={{width: '100px', textAlign : 'center'}}>Buy?</th>
                        <th style={{width: '100px', textAlign : 'center'}}>Item</th>
                        <th style={{width: '300px', textAlign : 'center'}}>Title</th>
                        <th style={{width: '100px', textAlign : 'center'}}>Cost</th>
                        <th style={{width: '100px', textAlign : 'center'}}>Times Ordered</th>
                        <th style={{width: '100px', textAlign : 'center'}}>Qty.</th>
                    </tr>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        <a href="">
                            <img className='thumbs' src="images/th_up.png"/>
                        </a>
                        <a href="">
                            <img className='thumbs' src="images/th_down.png"/>
                        </a>
                      </td>
                      <td className='productImg' dangerouslySetInnerHTML={{__html: this.props.image}}>
                      </td>
                      <td>
                        <span>{this.props.title}</span>
                        <a href="">
                            <img src="/images/info-icon.svg" className="infoIcon"/>
                        </a>
                      </td>
                      <td>{this.props.price}</td>
                      <td>6</td>
                      <td className='plusMinus'><div>+</div><div>6</div><div>-</div></td>
                    </tr>
                </tbody>
              </table>
            </div>
        );
    }
});

module.exports = cartItem;
