const ibm = require("ibm-cos-sdk");
require('dotenv').config()

const config = {
  endpoint: process.env.ENDPOINT,
  apiKeyId: process.env.API_KEY_ID,
  serviceInstanceId: process.env.SERVICE_INSTANCE_ID,
};

const cos = new ibm.S3(config);

cos.listObjects(
  {
    Bucket: "eglcinvestigacion-dev",
    Prefix: "common",
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
