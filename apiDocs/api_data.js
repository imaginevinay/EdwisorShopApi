define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/edwisorShop/cart/add",
    "title": "Create a new cart",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Product Added to cart\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryId\": \"BkI82OqAz\",\n        \"productId\": \"Bde74S2Oq\",\n        \"createdOn\": \"2018-05-19T07:46:21.451Z\",\n        \"lastModified\": \"2018-05-19T07:46:21.451Z\",\n        \"_id\": \"5affd64db9a19723ac47f16d\",\n        \"cartId\": \"HkSI8U6CG\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"Product cannot be added check the parameters\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpLocalhost3000ApiV1EdwisorshopCartAdd"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/edwisorShop/category/create",
    "title": "Create a single category",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Category Created\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryTitle\": \"Electronics Store\",\n        \"catDescription\": \"Search for All Electronics\",\n        \"createdOn\": \"2018-05-19T06:18:01.000Z\",\n        \"lastModified\": \"2018-05-19T06:13:13.400Z\",\n        \"_id\": \"5affc199bec54421346ec0e0\",\n        \"categoryId\": \"BJWjWSpRz\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n   \"error\": true,\n   \"message\": \"Category Not Created\",\n   \"status\": 402,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpLocalhost3000ApiV1EdwisorshopCategoryCreate"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/edwisorShop/:categoryId/product/create",
    "title": "Create a product",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Product Found\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryId\": \"BkI82OqAz\",\n        \"productTitle\": \"redmi note 5 pro\",\n        \"productDescription\": \"Stunning visuals,FHD+ display\",\n        \"size\": \"5.99 inches\",\n        \"specs\": \"4 GB RAM | 64 GB ROM | Expandable Upto 128 GB | 5.99 inch Full HD+ Display |12MP + 5MP Dual Rear Camera | 20MP Front Camera |4000 mAh Li\",\n        \"price\": \"14,999\",\n        \"reviews\": \"Best Mobile| Best Camera | Worth of Money\",\n        \"createdOn\": \"2018-05-18T04:03:53.774Z\",\n        \"lastModified\": \"2018-05-18T04:03:53.774Z\",\n        \"productId\": \"SkG3lRs0G\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No product found!\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpLocalhost3000ApiV1EdwisorshopCategoryidProductCreate"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/edwisorShop/cart/:cartId/delete",
    "title": "Delete cart",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Cart Deleted!\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No Cart Found\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Delete",
    "name": "PostHttpLocalhost3000ApiV1EdwisorshopCartCartidDelete"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/edwisorShop/category/delete/:categoryId",
    "title": "Delete a category",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Category Found\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No category found\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Delete",
    "name": "PostHttpLocalhost3000ApiV1EdwisorshopCategoryDeleteCategoryid"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/edwisorShop/product/:productId/delete",
    "title": "Delete a Product",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ProductId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Product Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No product found!\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Delete",
    "name": "PostHttpLocalhost3000ApiV1EdwisorshopProductProductidDelete"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/edwisorShop/cart/:cartId/all",
    "title": "Get products in cart",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>CartId of the cart passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"cart Found!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"categoryId\": \"uiopp\",\n            \"productId\": \"789jhyu,\",\n            \"createdOn\": \"2018-05-19T08:16:51.179Z\",\n            \"lastModified\": \"2018-05-19T08:16:51.179Z\",\n            \"cartId\": \"H1s_TLpCM\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No Cart Found\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Read",
    "name": "GetHttpLocalhost3000ApiV1EdwisorshopCartCartidAll"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/edwisorShop/category/all",
    "title": "Get all categories",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Categories Found!\",\n    \"status\": 200,\n    \"data\": {\n            \"categoryTitle\": \"Electronics Store\",\n            \"catDescription\": \"Search for Electronics\",\n            \"createdOn\": \"2018-05-17T03:51:42.000Z\",\n            \"lastModified\": \"2018-05-17T03:51:38.231Z\",\n            \"categoryId\": \"BkI82OqAz\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n   \"error\": true,\n   \"message\": \"Category not found\",\n   \"status\": 402,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Read",
    "name": "GetHttpLocalhost3000ApiV1EdwisorshopCategoryAll"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/edwisorShop/category/:categoryId",
    "title": "Get a single category",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The categoryId should be passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Category Found\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryTitle\": \"Electronics Store\",\n        \"catDescription\": \"Search for Electronics\",\n        \"createdOn\": \"2018-05-17T03:51:42.000Z\",\n        \"lastModified\": \"2018-05-17T03:51:38.231Z\",\n        \"categoryId\": \"BkI82OqAz\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n   \"error\": true,\n   \"message\": \"Category Id is Incorrect\",\n   \"status\": 402,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Read",
    "name": "GetHttpLocalhost3000ApiV1EdwisorshopCategoryCategoryid"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/edwisorShop/:categoryId/product/all",
    "title": "Get all products in a category",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"err\": false,\n   \"message\": \"Product Found\",\n   \"status\": 200,\n   \"data\": {\n\n           \"categoryId\": \"BkI82OqAz\",\n           \"productTitle\": \"redmi note 5 pro\",\n           \"productDescription\": \"Stunning visuals,FHD+ display, A powerful 1.8 GHz Snapdragon 636 processor, and expandable memory of up to 128 GB\",\n           \"size\": \"5.99 inches\",\n           \"specs\": \"4 GB RAM | 64 GB ROM | Expandable Upto 128 GB | 5.99 inch Full HD+ Display |12MP + 5MP Dual Rear Camera | 20MP Front Camera |4000 mAh Li\",\n           \"price\": \"14,999\",\n           \"reviews\": \"Best Mobile| Best Camera | Worth of Money\",\n           \"createdOn\": \"2018-05-18T04:03:53.774Z\",\n           \"lastModified\": \"2018-05-18T04:03:53.774Z\",\n           \"productId\": \"SkG3lRs0G\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No product found\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Read",
    "name": "GetHttpLocalhost3000ApiV1EdwisorshopCategoryidProductAll"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/edwisorShop/product/:productId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ProductId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Product Found\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryId\": \"BkI82OqAz\",\n        \"productTitle\": \"redmi note 5 pro\",\n        \"productDescription\": \"Stunning visuals,FHD+ display\",\n        \"size\": \"5.99 inches\",\n        \"specs\": \"4 GB RAM | 64 GB ROM | Expandable Upto 128 GB | 5.99 inch Full HD+ Display |12MP + 5MP Dual Rear Camera | 20MP Front Camera |4000 mAh Li\",\n        \"price\": \"14,999\",\n        \"reviews\": \"Best Mobile| Best Camera | Worth of Money\",\n        \"createdOn\": \"2018-05-18T04:03:53.774Z\",\n        \"lastModified\": \"2018-05-18T04:03:53.774Z\",\n        \"productId\": \"SkG3lRs0G\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No product found!\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Read",
    "name": "GetHttpLocalhost3000ApiV1EdwisorshopProductProductid"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/api/v1/edwisorShop/category/:categoryId/edit",
    "title": "Edit a Category",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Category Edited successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No category is edited!\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Update",
    "name": "PutHttpLocalhost3000ApiV1EdwisorshopCategoryCategoryidEdit"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/api/v1/edwisorShop/:categoryId/:productId/edit",
    "title": "Edit a Product",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ProductId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"err\": false,\n    \"message\": \"Product Found\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"Route Not Found\",\n   \"status\": 404,\n   \"data\": null\n}\n{\n    \"err\": true,\n    \"message\": \"No product found!\",\n    \"status\": 402,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoutes.js",
    "groupTitle": "Update",
    "name": "PutHttpLocalhost3000ApiV1EdwisorshopCategoryidProductidEdit"
  }
] });
