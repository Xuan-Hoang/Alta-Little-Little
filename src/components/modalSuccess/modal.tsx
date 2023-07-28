import React from 'react';
import { Modal } from 'antd';
// import './modal.css';
interface ModalSuccessProps {
  inputValue: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({ inputValue, isOpen, onClose }) => {
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      {inputValue && (
        <Modal footer={null} title='' visible={isOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className='checkoutModal2' style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}>
            <p>Gửi Liên hệ Thành Công</p>
            <p>Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ModalSuccess;
