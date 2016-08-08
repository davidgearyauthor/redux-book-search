import React from 'react';

const StateViewer = ({
  topic,
  books,
  currentStatus,
  displayMode,
  history,
}) => {
  const styles = {
    container: {
      margin: '20px',
      width: '400px',
      fontFamily: 'tahoma',
    },

    title: {
      fontSize: '24px',
      marginTop: '25px',
    },

    state: {
      marginTop: '10px',
    },

    hr: {
      marginTop: '50px',
    },
  };

  return (
    <div style={styles.container}>
      <hr style={styles.hr} />

      <div style={styles.title}>
        Application State
      </div>

      <div style={styles.state}>
        Topic: {topic}<br />

        Display mode:      { displayMode }<br />
        Current status:    { currentStatus }<br />
        Books displayed:   { books.length }<br />
        Actions processed: { history.past.length + history.future.length + 1 }<br />
        Current action:    { history.past.length + 1 }
      </div>
    </div>
  );
};

StateViewer.propTypes = {
  books: React.PropTypes.array.isRequired,
  currentStatus: React.PropTypes.string.isRequired,
  displayMode: React.PropTypes.string.isRequired,
  history: React.PropTypes.object.isRequired,
  topic: React.PropTypes.string.isRequired,
};

export default StateViewer;
