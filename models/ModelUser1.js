'use strict';

import mongoose from '../mongodb/db'

const Schema = mongoose.Schema;
// 图鉴表，根据等级
const ModelUser1 = new Schema({
  name: {
    type: String,
    default: ''
  },
  serverId: {
    type: String,
    default: ''
  },
  sex: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  cardId: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  }
})

export default mongoose.model('ModelUser1', ModelUser1);