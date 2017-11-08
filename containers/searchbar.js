import React from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';
import { feater } from '../actions/index';

  class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = { term :''}

        this.onInputChange = this.onInputChange.bind(this);
    }
    render(){
        return (
            <form onSubmit = {this.formSubmit} className="input-group">
            <input
             className = "form-control"
             placeholder= "search your term"
             value = { this.state.term }
             onChange = { this.onInputChange}

              />
            
            <span className="input-group-btn">
            <button type = "submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>
        );
    }
    formSubmit(event){
        event.preventDefault()
    }
    onInputChange(event){

        this.setState({ term  : event.target.value })
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( { feather  :  feater }, dispatch);
}

export default connect(null,mapDispatchToProps) (SearchBar);