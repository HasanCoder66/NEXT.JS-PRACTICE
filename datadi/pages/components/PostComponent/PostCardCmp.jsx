import React, { useState } from 'react';
import { Card, Divider } from 'antd';
const { Meta } = Card;
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";


const PostCardCmp = ({data}) => {
  // console.log(data);
 
  return(
    <Card
    hoverable
    style={{
      width: 240,
      marginBottom: 20,
    }}
    cover={<img alt="example" src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710499747/branding%20hopes/WhatsApp_Image_2024-03-15_at_14.34.05_25bf20d3_iwzafm.jpg" />}
  >
    {/* <Meta title={`${data?.firstName} ${data?.lastName}` } description={data?.phone} /> */}
   <Divider />
   <div className='flex mt-[1rem] items-center justify-between'>
   <div className='flex items-center'>
   <AiOutlineLike /> 
   {data?.numLikes}
   </div>
   <div className='flex items-center'>
   <LiaCommentSolid />
   {data?.numComments}
   </div>
   </div>
  </Card>
  )
};
export default PostCardCmp;