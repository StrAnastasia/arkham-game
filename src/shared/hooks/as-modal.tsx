import React, { useRef, memo, FC, ReactNode, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';

const Modal = memo(({ open, children }: AsModalProps) => {
  let ref = useRef<HTMLDivElement>(null);
  let externalRef = useRef<HTMLElement>();

  useEffect(() => {
    externalRef.current = document.body;
  }, []);

  return (
    <>
      {open &&
        externalRef.current &&
        createPortal(
          <ModalGreatwrapper>
            <ModalWrapper ref={ref}>
              <>{children}</>
            </ModalWrapper>
          </ModalGreatwrapper>,
          externalRef.current
        )}
    </>
  );
});

interface AsModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

interface ComponentProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

Modal.displayName = 'ModalOverlay';

const asModal: (
  Component: FC
) => ({ open, onClose, children }: AsModalProps) => ReactElement = (
  Component: FC<ComponentProps>
) => {
  return ({ open, onClose, children }) => (
    <Modal {...{ open, onClose }}>
      <Component {...{ open, onClose }}>{children}</Component>
    </Modal>
  );
};

export default asModal;

const ModalWrapper = styled.div`
  z-index: 40;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;

const ModalGreatwrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
