import React from 'react';
import { Modal } from 'antd';
import './modal.css';
import iconSad from '../../assets/Svg/iconSad.svg';
interface ModalFailProps {
  inputValue: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalFail: React.FC<ModalFailProps> = ({ inputValue, isOpen, onClose }) => {
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
          <div className='checkoutModal1'>
            <p style={{ textAlign: 'center' }}>
              <img src={iconSad} alt='' style={{ marginTop: '-12%' }} />
            </p>
          </div>
          <div className='checkoutModal2'>
            <p>Hình như đã có lỗi xảy ra khi thanh toán...</p>
            <p> Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ModalFail;
