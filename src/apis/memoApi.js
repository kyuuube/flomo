import request from './request'

// 驾驶舱图标数据
export const getMemos = params => request.get(`/memos`, { params });