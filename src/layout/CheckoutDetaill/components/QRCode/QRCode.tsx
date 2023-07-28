import { Space } from 'antd';
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { CheckCircleFilled } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

interface QRCodePageProps {
  count: number;
}

const QRCodePage: React.FC<QRCodePageProps> = ({ count }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [date] = useState(params.get('date') || '');
  const [text] = useState('https://ant.design/');

  return (
    <Space direction='vertical'>
      <div style={{ background: '#FFF', textAlign: 'center', width: '230px', height: '400px' }}>
        <QRCode style={{ marginTop: '20px' }} value={text || '-'} />
        <p style={{ fontSize: '27px', fontWeight: 'bold' }}>ALT20210501</p>
        <h3 style={{ color: 'var(--yellow-1, #FFC226)', fontSize: '19px' }}>
          VÉ CỔNG <br />
          <span style={{ color: 'black' }}>---</span>
        </h3>
        <p style={{ fontSize: '15px' }}>Ngày sử dụng:{date}</p>
        <br />
        <CheckCircleFilled style={{ fontSize: '30px' }} />
      </div>
    </Space>
  );
};

export default QRCodePage;
