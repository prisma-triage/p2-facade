const express = require('express')

const { Photon } = require('photon-placeholder')
const photon = new Photon()

const PORT = process.env.PORT || 5000

require('dotenv').config()

express()
  .get('/', async (req, res) => {
    const data = await photon.users.findMany()
    res.send(data)
  })
  .listen(PORT)
