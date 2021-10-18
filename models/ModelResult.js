'use strict';

import mongoose from '../mongodb/db'

const Schema = mongoose.Schema;
// 图鉴表，根据等级
const ModelResult = new Schema({
  name: {
    type: String,
    default: ''
  },
  serverId1: {
    type: String,
    default: ''
  },
  serverId2: {
    type: String,
    default: ''
  },
})

export default mongoose.model('ModelResult', ModelResult);