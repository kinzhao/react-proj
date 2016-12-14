'use strict';

const express = require('express');
const Scraper = require('node-scraper');
const router = express.Router();

router.post('/', function (req, res, next) {

    var scraper = new Scraper(req.body.productUrl, {
        selectors: ['#productTitle', '#priceblock_ourprice', '#imgTagWrapperId']
    });
     
    scraper.scrape().on('done', function (err, statusCode, data) {

        if (err){
          console.error(err);

        } else {
            res.status(200).json({
                title: data[0].content[0].html,
                price: data[1].content[0].html,
                imageUrl: data[2].content[0].html,
                productUrl: req.body.productUrl
           });
        }
    });
});

module.exports = router;
