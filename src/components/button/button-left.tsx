import React from 'react';
import { Button } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';

interface ButtonLeftProps {
  onClick: () => void;
}

const ButtonLeft: React.FC<ButtonLeftProps> = ({ onClick }) => {
  return (
    <Button
      type='primary'
      style={{
        backgroundColor: 'gold',
        border: 'none',
        // boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.1)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      onClick={onClick}>
      <CaretLeftOutlined
        style={{
          color: 'white',
          fontSize: '20px',
          position: 'relative',
          right: '2px',
        }}
      />
    </Button>
  );
};

export default ButtonLeft;
