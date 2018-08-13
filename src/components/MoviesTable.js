import React, { Component } from 'react';
import Movies from './Movies';

export default class MoviesTable extends Component{


    render(){
        return(
            <div>
                <table className="table table-stripped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                        <Movies/>
                    </tbody>
                </table>
            </div>
        );
    }
}