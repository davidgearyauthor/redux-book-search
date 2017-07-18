import React from 'react';
import Book from './book.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Books = ({
  books,
  displayMode,
  currentStatus,
}) => {
  const styles = {
    container: {
      width: '100%',
    },

    spinner: {
      textAlign: 'center',
      width: '100%',
    },
  };

  const Spinner = () => (
    <div style={styles.spinner}>
      <img src="./images/spinner.gif"
        role="presentation" />
    </div>
  );

  const bookMarkup = () => {
    let components = null;
    let bookItems = (<span>No items!</span>);

    if (books.length > 0) {
      components = books.map(item => {
        if (item.volumeInfo.imageLinks) {
          // Need different keys for different display modes
          // to trigger <ReactCSSTransitionGroup> animations
          
          const key = displayMode === 'THUMBNAIL' ? 
                                       item.id + 1 : 
                                       item.id;
          bookItems = (
            <Book item={item} 
              displayMode={displayMode}
              key={key} />);
        }
        return bookItems;
      });
    }
    return components;
  };

  return (
    <div>
      { currentStatus !== 'Fetching...' ?  null : <Spinner /> }
    
      <div style={styles.container}>
        <ReactCSSTransitionGroup transitionName="books"
          transitionLeaveTimeout={1}
          transitionEnterTimeout={1000}>
          {bookMarkup()}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
};

Books.propTypes = {
  books:       React.PropTypes.array.isRequired,
  currentStatus: React.PropTypes.string.isRequired,
  displayMode: React.PropTypes.string.isRequired,
};

export default Books;
