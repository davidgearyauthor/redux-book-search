import React from 'react';

const Book = ({
  item,
  displayMode,
}) => {
  const styles = {
    links: {
      marginTop: '20px',
    },

    link: {
      padding: '25px',
    },

    image: {
      boxShadow: '3px 3px 3px #686868',
      marginBottom: '15px',
    },
  };

  const linkMarkup = (currentItem, link) => (
    <div style={styles.links}>
      <a href={link} style={styles.link}>
        {currentItem.volumeInfo.title}
      </a>
    </div>
  );

  const thumbnailMarkup = (currentItem, link) => (
    <a href={link} style={styles.link}>
      <img src={currentItem.volumeInfo.imageLinks.thumbnail}
        style={styles.image} 
        role="presentation" /> 
    </a>
  );

  const link = item.volumeInfo.canonicalVolumeLink;

  return displayMode === 'THUMBNAIL' ?
           thumbnailMarkup(item, link) :
           linkMarkup     (item, link);
};

Book.propTypes = {
  item:        React.PropTypes.object.isRequired,
  displayMode: React.PropTypes.string.isRequired,
};

export default Book;
