var express = require('express');
var router = express.Router();
import ModelUser1 from '../models/ModelUser1'
import ModelImg from '../models/ModelImg';

router.post('/doSubmit', async (req, res, next) => {
  let data = req.body;
  // 每个手机限定一个
  let dataDB = await ModelUser1.findOne({
    phone: '' + data.phone,
  })
  if (dataDB) {
    res.json({
      code: -1,
      message: '该手机号已参与过报名，请勿重复提交。'
    });
  } else {
    let count = await ModelImg.find({}).countDocuments();


    console.log(data.serverId,count, 'serverId')
    let dataImg = await ModelImg.findOne({
      serverId: '' + data.serverId,
    })
    if (dataImg) {
      data.img = dataImg.img;
    }
    await ModelUser1.insertMany([data], {
      writeConcern: 0,
    })
    res.json({
      code: 0,
      data: data,
      message: '提交成功'
    });
  }
});
export default router;