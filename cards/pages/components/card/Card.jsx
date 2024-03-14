import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const CardCmp = ({data}) => (
  <Card
  hoverable
  style={{
    width: 240,
  }}
  // {{console.log(data)}}
    cover={<img alt="Place Image" src="https://images.unsplash.com/photo-1551749005-6b94ff060954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww" />}
  >
    <Meta title='hasan' description="www.instagram.com" />
  </Card>
);
export default CardCmp;