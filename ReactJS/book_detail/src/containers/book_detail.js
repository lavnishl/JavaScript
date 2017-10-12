import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {

        console.log('BookDetail : '+this.props.book_detail+' ['+this.props.book+']');
        if(!this.props.book_detail) {
            console.log('one');
            return (<div>Select a book to get started</div>);
        }
        console.log('two');
            return ( 
            <div>
                <h1>Book Detail</h1>
                <br/>
                <h3>Title : {this.props.book_detail.title}</h3>
                <h3>Pages : {this.props.book_detail.pages}</h3>
            </div>
        );
        
    }
}

function mapStateToProps(state) { // state : contains 2 things : array of books & active books.
    // whatever is returned from here will show up as props inside of BookList
    return {
        book_detail: state.activeBook
    }; // activeBook : because combine reducer has this name
}

// basically you are just connecting ... a function & component (i.e. container)
export default connect(mapStateToProps)(BookDetail);