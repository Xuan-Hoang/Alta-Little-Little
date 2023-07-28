import React, { useRef, useState } from 'react';
import { Col, Row } from 'antd';
import QRCodePage from '../QRCode/QRCode';
import { useLocation } from 'react-router-dom';
import ButtonLeft from '../../../../components/button/button-left';
import ButtonRight from '../../../../components/button/button-right';

const MySlider = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const quantity = parseInt(params.get('quantity') || '0', 10);
  const listRef = useRef<HTMLDivElement>(null);
  const items = [...Array(quantity)].map((_, index) => (
    <Col key={index} style={{ margin: '0px 10px 0px 11px' }}>
      <QRCodePage count={index + 1} />
    </Col>
  ));
  const [currentPage, setCurrentPage] = useState(1);

  const ItemsPerPage = 4;
  const handleNextPage = () => {
    const totalPages = Math.ceil(items.length / ItemsPerPage);
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));

    if (listRef.current) {
      listRef.current.scrollBy({
        left: listRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));

    if (listRef.current) {
      listRef.current.scrollBy({
        left: -listRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / ItemsPerPage);
  const currentPageText = `${currentPage}/${totalPages}`;

  return (
    <div>
      <Row justify='center' align='middle'>
        <Col style={{ textAlign: 'center' }} span={1}>
          <ButtonLeft onClick={handlePrevPage} />
        </Col>
        <Col span={22}>
          <div
            style={{
              display: 'flex',
              overflowX: 'hidden',
            }}
            ref={listRef}>
            {displayedItems}
          </div>
        </Col>
        <Col style={{ textAlign: 'center' }} span={1}>
          <ButtonRight onClick={handleNextPage} />
        </Col>
      </Row>
      <br />
      <Row justify='center' align='middle'>
        <Col span={20}>Số Lượng vé: {quantity} vé</Col>
        <Col>
          <div>Trang {currentPageText} </div>
        </Col>
      </Row>
    </div>
  );
};

export default MySlider;
