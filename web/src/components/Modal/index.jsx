import { ContainerModal,ModalBody,ModalClose,ModalContent,ModalDialog, ModalFooter, ModalHeader } from './styles';


export default function Modal({ isVisible = false, title, content, footer, onClose }) {
 
  return !isVisible ? null : (
    <ContainerModal onClick={onClose}>
      <ModalDialog onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h3 className="modal-title">{title}</h3>
          <ModalClose onClick={onClose}>
            &times;
          </ModalClose>
        </ModalHeader>
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalDialog>
    </ContainerModal>
  );
};

