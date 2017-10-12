// Although we dont use React directly 
// but JSX turns into React.createElement() hence need to include
import React,{Component} from 'react';
// means this
// const Component = React.Component;

class SearchBar extends Component { // Note skipped React.
    constructor(props) {
        super(props);
        this.state = {term: 'default value'};

    }
    render() {
    return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={ (event)=> {
                    this.onInputChange(event.target.value)
                  }
                }
        />
        </div>
        );
    }

    onInputChange(term) {
        console.log(event);
        this.setState({term: event.target.value});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;