define({ "api": [
  {
    "type": "post",
    "url": "http://10.62.58.61/api/addAdvertising",
    "title": "Let Admin add new Advertising",
    "version": "0.0.0",
    "name": "addAdvertising",
    "group": "Advertising",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "adInfo",
            "description": "<p>(Advertising's info store in req.body in form-data data type: text).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adTitle",
            "description": "<p>Advertising's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adDescription",
            "description": "<p>Advertising's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adsalesItemurl",
            "description": "<p>salesitem's url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adupdateDate",
            "description": "<p>Advertising's update date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStartDate",
            "description": "<p>Advertising's play start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStopDate",
            "description": "<p>Advertising's play stop date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "adInfo.adplayStatus",
            "description": "<p>Advertising's play status (true: open, false: close).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example in adInfo:",
          "content": "\"adInfo\": {\n      \"adTitle\": \"Garage Sale\",\n      \"adDescription\": \"This is a new advertising\",\n      \"adsalesItemurl\": \"http://127.0.0.1:3000/#/profile/tonyyu/26\",\n      \"adupdateDate\": \"2020-02-12\",\n      \"adplayStartDate\": \"2020-02-12\",\n      \"adplayStopDate\": \"2020-02-15\",\n      \"adplayStatus\": true,\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Advertising",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotPermitted",
            "description": "<p>The given user id is not permitted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"NotPermitted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "http://10.62.58.61/api/editAdvertising",
    "title": "Let Admin edit Advertising",
    "version": "0.0.0",
    "name": "editAdvertising",
    "group": "Advertising",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "adInfo",
            "description": "<p>(Advertising's info store in req.body in form-data data type: text).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.id",
            "description": "<p>Advertising's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adTitle",
            "description": "<p>Advertising's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adImgsrc",
            "description": "<p>Advertising's Image src (generate from backend according to the image file in adPic).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adDescription",
            "description": "<p>Advertising's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adsalesItemurl",
            "description": "<p>salesitem's url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adupdateDate",
            "description": "<p>Advertising's update date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStartDate",
            "description": "<p>Advertising's play start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStopDate",
            "description": "<p>Advertising's play stop date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "adInfo.adplayStatus",
            "description": "<p>Advertising's play status (true: open, false: close).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example in adInfo:",
          "content": "\"adInfo\": {\n      \"id\": \"1\",\n      \"adTitle\": \"Garage Sale\",\n      \"adImgsrc\": \"/api/getAdvertisings/1/Adpic\",\n      \"adDescription\": \"This is a new advertising\",\n      \"adsalesItemurl\": \"http://127.0.0.1:3000/#/profile/tonyyu/26\",\n      \"adupdateDate\": \"2020-02-12\",\n      \"adplayStartDate\": \"2020-02-12\",\n      \"adplayStopDate\": \"2020-02-15\",\n      \"adplayStatus\": true,\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Advertising",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotPermitted",
            "description": "<p>The given user id is not permitted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"NotPermitted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "http://10.62.58.61/api/getAdvertisingInfo?advertisingID=1",
    "title": "get Advertising's full info",
    "version": "0.0.0",
    "name": "getAdvertisingInfo",
    "group": "Advertising",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "advertisingID",
            "description": "<p>Advertising's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "adInfo",
            "description": "<p>adInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.id",
            "description": "<p>Advertising ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adTitle",
            "description": "<p>Advertising's title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adDescription",
            "description": "<p>Advertising's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adImgsrc",
            "description": "<p>Advertising's image src.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adsalesItemurl",
            "description": "<p>Advertising's salesItem url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adupdateDate",
            "description": "<p>Advertising's update date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStartDate",
            "description": "<p>Advertising's play start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStopDate",
            "description": "<p>Advertising's play stop date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "adInfo.adplayStatus",
            "description": "<p>Advertising's play status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"adInfo\": [{\n          \"id\": \"1\",\n          \"adTitle\": \"Garage Sale\",\n          \"adDescription\": \"This is a new advertising\",\n          \"adImgsrc\": \"/api/getAdvertisings/1/Adpic\",\n          \"adsalesItemurl\": \"http://127.0.0.1:3000/#/profile/tonyyu/26\",\n          \"adupdateDate\": \"2020-02-12\",\n          \"adplayStartDate\": \"2020-02-12\",\n          \"adplayStopDate\": \"2020-02-15\",\n          \"adplayStatus\": true,\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Advertising",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdvertisingNotFound",
            "description": "<p>The Advertisings was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"AdvertisingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "http://10.62.58.61/api/getAdvertisings",
    "title": "Choose 5 correspond advertisings",
    "version": "0.0.0",
    "name": "getAdvertisings",
    "group": "Advertising",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "adInfo",
            "description": "<p>adInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.id",
            "description": "<p>Advertising ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adTitle",
            "description": "<p>Advertising's title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adDescription",
            "description": "<p>Advertising's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adImgsrc",
            "description": "<p>Advertising's image src.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adsalesItemurl",
            "description": "<p>Advertising's salesItem url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adupdateDate",
            "description": "<p>Advertising's update date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStartDate",
            "description": "<p>Advertising's play start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStopDate",
            "description": "<p>Advertising's play stop date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "adInfo.adplayStatus",
            "description": "<p>Advertising's play status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"adInfo\": [{\n          \"id\": \"1\",\n          \"adTitle\": \"Garage Sale\",\n          \"adDescription\": \"This is a new advertising\",\n          \"adImgsrc\": \"/api/getAdvertisings/1/Adpic\",\n          \"adsalesItemurl\": \"http://127.0.0.1:3000/#/profile/tonyyu/26\",\n          \"adupdateDate\": \"2020-02-12\",\n          \"adplayStartDate\": \"2020-02-12\",\n          \"adplayStopDate\": \"2020-02-15\",\n          \"adplayStatus\": true,\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Advertising",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdvertisingNotFound",
            "description": "<p>The Advertisings was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"AdvertisingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "http://10.62.58.61/api/getAllAdvertisingInfo",
    "title": "get All Advertisings' info",
    "version": "0.0.0",
    "name": "getAllAdvertisingInfo",
    "group": "Advertising",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "adInfo",
            "description": "<p>adInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.id",
            "description": "<p>Advertising ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adTitle",
            "description": "<p>Advertising's title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adDescription",
            "description": "<p>Advertising's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adImgsrc",
            "description": "<p>Advertising's image src.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adsalesItemurl",
            "description": "<p>Advertising's salesItem url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adupdateDate",
            "description": "<p>Advertising's update date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStartDate",
            "description": "<p>Advertising's play start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adInfo.adplayStopDate",
            "description": "<p>Advertising's play stop date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "adInfo.adplayStatus",
            "description": "<p>Advertising's play status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"adInfo\": [{\n          \"id\": \"1\",\n          \"adTitle\": \"Garage Sale\",\n          \"adDescription\": \"This is a new advertising\",\n          \"adImgsrc\": \"/api/getAdvertisings/1/Adpic\"\n          \"adsalesItemurl\": \"http://127.0.0.1:3000/#/profile/tonyyu/26\",\n          \"adupdateDate\": \"2020-02-12\",\n          \"adplayStartDate\": \"2020-02-12\",\n          \"adplayStopDate\": \"2020-02-15\",\n          \"adplayStatus\": true,\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Advertising",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdvertisingNotFound",
            "description": "<p>The Advertisings was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"AdvertisingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/answerQuestion",
    "title": "Insert Question's answer",
    "version": "0.0.0",
    "name": "answerQuestion",
    "group": "Q_and_A",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionID",
            "description": "<p>Question ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "viewerUserID",
            "description": "<p>viewerUser ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "answers",
            "description": "<p>answer info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"questionID\": \"1\",\n      \"viewerUserID\": \"5\",\n\t     \"answers\":{         \n          \"answer\": \"this is for AI use\",\n          \"answerDate\": \"2019-12-26\",\n          \"answerTime\": \"11:30:20\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answers",
            "description": "<p>answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answer",
            "description": "<p>answer string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answerDate",
            "description": "<p>answer date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answerTime",
            "description": "<p>answer time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"answers\": {\n        \"answer\": \"this is for AI use\",\n        \"answerDate\": \"2019-12-26\",\n        \"answerTime\": \"11:30:20\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Q_and_A",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The question is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/answerQuestion",
    "title": "Insert Question's answer",
    "version": "0.0.0",
    "name": "answerQuestion",
    "group": "Q_and_A",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionID",
            "description": "<p>Question ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "viewerUserID",
            "description": "<p>viewerUser ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "answers",
            "description": "<p>answer info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"questionID\": \"1\",\n      \"viewerUserID\": \"5\",\n\t     \"answers\":{         \n          \"answer\": \"this is for AI use\",\n          \"answerDate\": \"2019-12-26\",\n          \"answerTime\": \"11:30:20\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answers",
            "description": "<p>answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answer",
            "description": "<p>answer string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answerDate",
            "description": "<p>answer date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answers.answerTime",
            "description": "<p>answer time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"answers\": {\n        \"answer\": \"this is for AI use\",\n        \"answerDate\": \"2019-12-26\",\n        \"answerTime\": \"11:30:20\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Q_and_A",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The question is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/getQuestions",
    "title": "Get SaleItem's Questions Info",
    "version": "0.0.0",
    "name": "getQuestions",
    "group": "Q_and_A",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>salesItemID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  salesItemID:15\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Questions",
            "description": "<p>Question array.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.id",
            "description": "<p>Question id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.salesItemID",
            "description": "<p>sale item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.askerAvatar",
            "description": "<p>asker's avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.askerdisplayName",
            "description": "<p>asker's displayName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.askercode",
            "description": "<p>asker's code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.answererAvatar",
            "description": "<p>answerer's avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.answererdisplayName",
            "description": "<p>answerer's displayName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.answerercode",
            "description": "<p>answerer's code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.question",
            "description": "<p>question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Questions.answers",
            "description": "<p>question's answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.answers.answer",
            "description": "<p>question's answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.answers.answerDate",
            "description": "<p>answered date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.answers.answerTime",
            "description": "<p>answered time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.date",
            "description": "<p>asked date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Questions.time",
            "description": "<p>asked time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Questions.hide",
            "description": "<p>question status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"Questions\": [\n        {\n            \"id\": \"1\",\n            \"salesItemID\": \"15\",\n            \"askerAvatar\": \"assets/avatars/6.svg\",\n            \"askerdisplayName\": \"YC Leung\",\n            \"askercode\": \"ycLeung\",\n            \"answererAvatar\": \"assets/avatars/5.svg\",\n            \"answererdisplayName\": \"GF Hu\",\n            \"answerercode\": \"gfHu\",\n            \"question\": \"This is a question\",\n            \"answers\": [\n                {\n                    \"answer\": \"this is for AI use too\",\n                    \"answerDate\": \"2019-12-26\",\n                    \"answerTime\": \"11:30:20\"\n                }\n            ],\n            \"date\": \"2019-12-26\",\n            \"time\": \"09:04:30\",\n            \"hide\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Q_and_A",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The question is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/hideQuestionInfo",
    "title": "Hide Question",
    "version": "0.0.0",
    "name": "hideQuestionInfo",
    "group": "Q_and_A",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionID",
            "description": "<p>Question ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "viewerUserID",
            "description": "<p>viewerUserID to check Authority.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  questionID:\"1\",\n  viewerUserID:\"6\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Q_and_A",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The question is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/questionsubmit",
    "title": "Submit Question",
    "version": "0.0.0",
    "name": "questionsubmit",
    "group": "Q_and_A",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Question Unique ID generated by backend.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>sale Item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "askerID",
            "description": "<p>asker's ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>full question description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>ex:&quot;2019-12-25&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>ex:&quot;15:32:40&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n  \"salesItemID\":\"15\",\n  \"askerID\": \"6\",\n  \"question\": \"This is a question\",\n  \"date\": \"2019-12-26\",\n  \"time\": \"09:04:30\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Question",
            "description": "<p>Question array.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Question.id",
            "description": "<p>Question id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Question.salesItemID",
            "description": "<p>sale item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Question.askerID",
            "description": "<p>asker's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Question.question",
            "description": "<p>full question description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Question.date",
            "description": "<p>asked date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Question.time",
            "description": "<p>asked time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"Question\": {\n        \"id\": \"3\",\n        \"salesItemID\": \"15\",\n        \"askerID\": \"6\",\n        \"question\": \"This is a question for submit\",\n        \"date\": \"2019-12-26\",\n        \"time\": \"14:52:30\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotPermitted",
            "description": "<p>The given user id is not permitted.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Q_and_A"
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/addSaleitemRating",
    "title": "Add SalesItemRating by customer",
    "version": "0.0.0",
    "name": "addSaleitemRating",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customerID (Verify from JWT).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionID",
            "description": "<p>transactionID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>salesItemID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "starsforsaleItem",
            "description": "<p>starsforsaleItem.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedbackforsaleItem",
            "description": "<p>feedbackforsaleItem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"transactionID\":\"Q3lZyIDg\",\n  \"salesItemID\":\"20\",\n  \"starsforsaleItem\": 5,\n  \"feedbackforsaleItem\": \"This product is perfect!\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SaleItemNotFound",
            "description": "<p>The id of the saleItem was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"SaleItemNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/addbuyerRating",
    "title": "Add buyerRating by seller",
    "version": "0.0.0",
    "name": "addbuyerRating",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellerID",
            "description": "<p>sellerID (Verify from JWT).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionID",
            "description": "<p>transactionID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "starsforbuyer",
            "description": "<p>starsforbuyer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedbackforbuyer",
            "description": "<p>feedbackforbuyer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"transactionID\":\"Q3lZyIDg\",\n  \"starsforbuyer\": 5,\n  \"feedbackforbuyer\": \"You are a good customer\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TransactionNotFound",
            "description": "<p>The id of the Transaction was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"TransactionNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/checkbuyerTransaction",
    "title": "Check buyer transaction existance",
    "version": "0.0.0",
    "name": "checkbuyerTransactionexist",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customer ID (Verify and decoded from JWT).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>salesItemID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionID",
            "description": "<p>transactionID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"salesItemID\":\"2\",\n  \"transactionID\":\"Q3lZyIDg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exists",
            "description": "<p>buyer's transaction exists or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"exists\" : (true or false)\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotPermitted",
            "description": "<p>The given user id is not permitted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"NotPermitted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/checksellerTransaction",
    "title": "Check seller transaction existance",
    "version": "0.0.0",
    "name": "checksellerTransactionexist",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customerID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellerID",
            "description": "<p>sellerID (Verify from JWT).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>salesItemID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionID",
            "description": "<p>transactionID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"salesItemID\":\"6\",\n  \"customerID\":\"7\",\n  \"transactionID\":\"Q3lZyIDg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exists",
            "description": "<p>seller's transaction exists or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"exists\" : (true or false)\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotPermitted",
            "description": "<p>The given user id is not permitted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"NotPermitted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/getSaleitemFullRatingInfo",
    "title": "Get salesItem's full rating info",
    "version": "0.0.0",
    "name": "getSaleitemFullRatingInfo",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>salesItemID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"salesItemID\":\"20\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "itemRatingInfos",
            "description": "<p>itemRatingInfos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "itemRatingInfos.customerCode",
            "description": "<p>customerCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "itemRatingInfos.customerDisplayname",
            "description": "<p>customerDisplayname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "itemRatingInfos.sellerID",
            "description": "<p>sellerID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "itemRatingInfos.salesItemID",
            "description": "<p>salesItemID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "itemRatingInfos.transactionID",
            "description": "<p>transactionID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "itemRatingInfos.starsforsaleItem",
            "description": "<p>starsforsaleItem.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "itemRatingInfos.feedbackforsaleItem",
            "description": "<p>feedbackforsaleItem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"itemRatingInfos\":[\n     {\n      \"customerCode\":\"tonyyu\",\n      \"customerDisplayName\": \"tonyyu\",\n      \"sellerID\":\"5\",\n      \"salesItemID\":\"20\",\n      \"transactionID\":\"Q3lZyIDg\",\n      \"starsforsaleItem\": 5,\n      \"feedbackforsaleItem\": \"This is a good product\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RatingNotFound",
            "description": "<p>The rating of salesItem is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"RatingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/getSaleitemStarCount",
    "title": "Get saleItems rating star count times",
    "version": "0.0.0",
    "name": "getSaleitemStarCount",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salesItemID",
            "description": "<p>salesItemID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"salesItemID\":\"20\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "starCountTimes",
            "description": "<p>starCountTimes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "starCountTimes.starCount",
            "description": "<p>starCount.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "starCountTimes.times",
            "description": "<p>times.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"starCountTimes\":[\n      {\n          \"starCount\":1,\n          \"times\":4\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RatingNotFound",
            "description": "<p>The rating of salesItem is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"RatingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/getSellerTransaction",
    "title": "Get Seller's transactions",
    "version": "0.0.0",
    "name": "getSellerTransaction",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellerID",
            "description": "<p>(Verify from JWT).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": "<p>transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.id",
            "description": "<p>transaction ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.buyerCode",
            "description": "<p>transaction's buyer Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.buyerDisplayName",
            "description": "<p>transaction's buyerDisplayName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.orderCount",
            "description": "<p>transaction's orderCount.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.qty",
            "description": "<p>transaction's qty.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.totalPrice",
            "description": "<p>transaction's totalPrice.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.paymentMethod",
            "description": "<p>transaction's paymentMethod.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.date",
            "description": "<p>transaction's date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.time",
            "description": "<p>transaction's time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.status",
            "description": "<p>transaction's status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"transactions\":[\n      {\n        \"id\": 'uJL62avQ',\n          \"buyerCode\": 'gfHu',\n          \"buyerDisplayName\": 'GF Hu',\n          \"orderCount\": 1,\n          \"qty\": 1,\n          \"totalPrice\": 999,\n          \"paymentMethod\":'creditcard' ,\n          \"date\": '2020-02-07',\n          \"time\": '10:53:56',\n          \"status\": 0\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TransactionNotFound",
            "description": "<p>The id of the Transaction was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"TransactionNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/getbuyerStarCount",
    "title": "Get buyer rating star count times",
    "version": "0.0.0",
    "name": "getbuyerStarCount",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customerID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"customerID\":\"7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "starCountTimes",
            "description": "<p>starCountTimes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "starCountTimes.starCount",
            "description": "<p>starCount.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "starCountTimes.times",
            "description": "<p>times.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"starCountTimes\":[\n      {\n          \"starCount\":1,\n          \"times\":4\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RatingNotFound",
            "description": "<p>The rating of salesItem is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"RatingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://10.62.58.61/api/getfullbuyerratingInfo",
    "title": "Get buyer's full rating info",
    "version": "0.0.0",
    "name": "getfullbuyerratingInfo",
    "group": "Transaction_Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customerID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"customerID\":\"7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "buyerRatingInfos",
            "description": "<p>buyerRatingInfos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buyerRatingInfos.customerID",
            "description": "<p>customerID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buyerRatingInfos.sellerCode",
            "description": "<p>sellerCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buyerRatingInfos.sellerDisplayName",
            "description": "<p>sellerDisplayName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buyerRatingInfos.transactionID",
            "description": "<p>transactionID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "buyerRatingInfos.starsforbuyer",
            "description": "<p>starsforbuyer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buyerRatingInfos.feedbackforbuyer",
            "description": "<p>feedbackforbuyer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"buyerRatingInfos\":[\n       {\n          \"customerID\":\"7\",\n          \"sellerCode\":\"gfHu\",\n          \"sellerDisplayName\":\"GF Hu\",\n          \"transactionID\":\"Q3lZyIDg\",\n          \"starsforbuyer\": 5,\n          \"starsforbuyer\": \"You are a good customer!\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/SaleItemQandA/SaleItemQandA.js",
    "groupTitle": "Transaction_Rating",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RatingNotFound",
            "description": "<p>The rating of salesItem is not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"RatingNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
