import React, { Component } from 'react';
import './App.css';
import Main from './hover-effect-component/Main';

class App extends Component {
    ShowInfoHuman(human)
    {
        if (human.status) {
            return <h1>
                        {human.id } <br/>
                        {human.name} <br/>
                        {human.address} <br/>
                        status : {human.status ? 'entire' : 'propose'}
                    </h1>
        }
    }
  render() {
    var a = 5.3;
    var b = 'reactJS';
    var c  = 10;
    var human = {
        id : 1,
        name : 'Hoa',
        address : 3256,
        status : true
    };

    var users = [
        {
            id : 1,
            name : 'Han',
            address : 15212
        },
        {
            id : 2,
            name : 'hieu',
            address : 25611
        },
        {
            id : 3,
            name : 'hong',
            address : 2353
        }
    ];

    var elements = users.map((user) => {
        return  <div key = {user.id}>
                    <h3>name : { user.name }</h3>
                    <span>address : {user.address}</span>
                </div>
    });

    return (   
        <div>
            <Main />
            <div>
                <h2>
                    a : {a} <br/>
                    b : {b} <br/>
                    c : {c} <br/>
                    d : {a + c} <br/>
                </h2>
            </div>
            <div>
                <h1>
                    {human.id } <br/>
                </h1>
                {this.ShowInfoHuman(human)}
                <br/>
                { elements }
            </div>
        </div>
    );
  }
}

export default App;




