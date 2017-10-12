import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

 class BookList extends Component {
   renderList() {
        return this.props.books.map((book)=> {
            return (
                <li key={book.title} 
                    onClick = {()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
   }

   render() {
        // console.log('inside bookList component:-'+this.props.books);
        // console.log('inside bookList comp :-'+this.props.selectBook);
        return ( 
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) { // state : contains 2 things : array of books & active books.
    // whatever is returned from here will show up as props inside of BookList
    return {
        books: state.books
    };
}

// whatever is returned from this fn, will show up as props inside of BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook (fn) is called , pass result to all of our reducers i.e. dispatch (fn)
    return bindActionCreators({selectBook:selectBook},dispatch);
}
// Promote BookList from a component to a container - it needs to know
// about the new dispatch method selectBook. make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
