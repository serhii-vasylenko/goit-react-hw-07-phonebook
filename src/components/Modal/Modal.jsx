import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', habdleEscPress);

    return () => {
      window.removeEventListener('keydown', habdleEscPress);
    };
  });

  const habdleEscPress = ({ code }) => {
    if (code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.object,
};
