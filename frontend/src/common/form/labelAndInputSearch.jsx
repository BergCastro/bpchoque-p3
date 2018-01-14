import React from 'react'
import Grid from '../layout/grid'
import Autosuggest from 'react-autosuggest'

import './labelAndInputSearch.css'


const getSuggestions = (value, list) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : list.filter(lang =>
        lang.nome.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.nome;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div >
        {suggestion.nome+' - '+suggestion.descricao}
    </div>
)


export default class LabelAndInputSeach extends React.Component {

    state = {
        value: '',
        suggestions: []
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value, this.props.list)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    render() {
        const { value, suggestions } = this.state
        const { cols, label} = this.props

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Digite o nome de uma prova',
            value,
            onChange: this.onChange
        };
        return (
            <Grid cols={cols}>
                <div className='form-group'>
                    <label >{label}</label>
                    
                    <Autosuggest className='form-control'
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
            </Grid>
        )
    }
} 