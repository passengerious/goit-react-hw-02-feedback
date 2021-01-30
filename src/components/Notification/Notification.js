import PropTypes from 'prop-types';

function Notification ({ infoMessage }) {
    return(
    <p>{infoMessage}</p>
    );
}

Notification.propTypes = {
    infoMessage: PropTypes.string.isRequired,
};
  
export default Notification;