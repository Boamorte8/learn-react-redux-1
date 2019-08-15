import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 1
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        const results = this.props.results.map((result) => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
        ));
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onRestCounter( 5 )}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>{results}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter.counter,
        results: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionsTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionsTypes.DECREMENT}),
        onAddCounter: (value) => dispatch({
            type: actionsTypes.ADD_COUNTER,
            value: value
        }),
        onRestCounter: (value) => dispatch({
            type: actionsTypes.REST_COUNTER,
            value: value
        }),
        onStoreResult: (value) => dispatch({type: actionsTypes.STORE_RESULT, result: value}),
        onDeleteResult: (value) => dispatch({type: actionsTypes.DELETE_RESULT, id: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);