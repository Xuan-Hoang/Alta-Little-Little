import { CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
interface ButtonRightProps {
  onClick: () => void;
}
const ButtonRight: React.FC<ButtonRightProps> = ({ onClick }) => {
  return (
    <Button
      type='primary'
      style={{
        backgroundColor: 'gold',
        border: 'none',
        // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      onClick={onClick}>
      <CaretRightOutlined
        style={{
          color: 'white',
          fontSize: '20px',
          // position: 'relative',
          right: '2px',
        }}
      />
    </Button>
  );
};

export default ButtonRight;
