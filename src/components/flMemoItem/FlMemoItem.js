// import { useEffect } from 'react'
import { Image } from 'antd';
import FallbackPicture from '../../constants/fallbackPicture'
import './index.css'
// placeholder 的功能需要图片服务支持
// 基本图像裁剪也可以由图片服务处理
function FlMemoItem({ item }) {
  return <div className='memo-item bg-white py-3 px-3 mb-3 rounded-lg hover:shadow-md cursor-pointer'>
    <div className='flex justify-between'>
      <div className='text-xs text-gray-400 flex content-center items-center'>{ item.createTime }</div>
      <div className='flex content-center'><i className="ri-more-line" /></div>
    </div>
    <div className='pt-2 text-xs main-text-style leading-5'>
      {
        item.tag.map((tag, index) => {
          return <span key={index} className='bg-blue-100 text-blue-400 text-xm rounded px-1 py-0.5 mr-1.5'>#{tag}</span>
        })
      }
      <span>{ item.memo }</span>
    </div>
    <div className='pt-2'>
      {
        item.picture.map((pic, _index) => {
          return <Image
            key={_index}
            width={100}
            src={pic}
            fallback={FallbackPicture}
          />
        })
      }

    </div>
  </div>
}
export default FlMemoItem