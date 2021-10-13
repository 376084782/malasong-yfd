var express = require('express');
var router = express.Router();
import ModelUser1 from '../models/ModelUser1'

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
    // let count = await ModelUser1.find({}).countDocuments();
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