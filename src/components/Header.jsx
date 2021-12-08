import PropTypes from 'prop-types';

function Header({title}) {
  const styles = {
    header: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: '#ff6a95',
    },
  };

  return (
    <header style={styles.header}>
      <div className='container'>
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Feedback App',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
