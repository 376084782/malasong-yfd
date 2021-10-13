'use strict';

import mongoose from '../mongodb/db'

const Schema = mongoose.Schema;
// 图鉴表，根据等级
const ModelImg = new Schema({
  serverId: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
})

export default mongoose.model('ModelImg', ModelImg);