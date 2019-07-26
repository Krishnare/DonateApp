import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './index.css';

class ConfirmationBox extends Component {
  toggle = () => {
    if (this.props.handleCancelClick) {
      this.props.handleCancelClick();
    }
  }

  handleContinueClick = () => {
    if (this.props.handleContinueClick) {
      this.props.handleContinueClick();
    }
  }

  handleCancelClick = () => {
    if (this.props.handleCancelClick) {
      this.props.handleCancelClick();
    }
  }

  render() {
    const { className, headerTitle, message, continueButtonText, cancelButtonText, hideHeader, hideFooter, centered } = this.props;
    return (
      <Modal isOpen toggle={this.toggle} className={className} centered={centered}>
        {
          !hideHeader && <ModalHeader toggle={this.toggle}>{headerTitle}</ModalHeader>
        }
         <ModalBody>
           {message}
         </ModalBody>
         {
           !hideFooter && 
          (<ModalFooter>
            <Button color="link" onClick={this.handleCancelClick}>{cancelButtonText}</Button>{' '}
            <Button color="link" onClick={this.handleContinueClick}>{continueButtonText}</Button>
          </ModalFooter>)
        }
       </Modal>
    );
  }
}

// propTypes.
ConfirmationBox.propTypes = {
  className: PropTypes.string,
  headerTitle: PropTypes.string,
  message: PropTypes.string,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  centered: PropTypes.bool,
  continueButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  handleContinueClick: PropTypes.func,
  handleCancelClick: PropTypes.func,
};

ConfirmationBox.defaultProps = {
  continueButtonText: 'Continue',
  cancelButtonText: 'Cancel',
  hideHeader: false,
  hideFooter: false,
  centered: false,
}

export default ConfirmationBox;
