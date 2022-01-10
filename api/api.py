import os
os.environ['CUDA_VISIBLE_DEVICES'] = '-1'
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS
#from flask_cors import CORS, cross_origin
import logging
import boto3
app = Flask(__name__)
CORS(app)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('')
UPLOAD_FOLDER = 'Uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ACCESS_KEY='AKIAYYZCVZZ7NGQIJUWJ'
SECRET_KEY='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'
bucket='covid-positive-negetive'
import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.models import load_model

x = "Awesome"

@app.route('/api',methods=['GET'])
def api():
	return {
	  'userId':1,
	  'title':'Hi there',
	  'completed':False
	}


@app.route('/upload', methods=['POST'])
def fileUpload():
    target=os.path.join(UPLOAD_FOLDER,'')
    if not os.path.isdir(target):
        os.mkdir(target)

		
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    if((""+filename).lower().endswith(('.png', '.jpg', '.jpeg'))==False):
    	return {'result': 'Wrong File Extension'}
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    model = load_model('VGG19.h5')
    CATEGORIES = ["Pneumonia", "No Pneumonia"]
    img = cv2.imread(UPLOAD_FOLDER+"/"+filename)
    img = cv2.resize(img,(224,224))
    img = img.reshape(1,224,224,3)
    prediction = model.predict(img)
    logger.info(UPLOAD_FOLDER+"/"+filename)
    global x
    x = filename    
    return {'result': CATEGORIES[int(round(prediction[0][0]))]}


@app.route('/uploadc', methods=['POST'])
def fileUploadc():
    target=os.path.join(UPLOAD_FOLDER,'')
    if not os.path.isdir(target):
        os.mkdir(target)

		
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    if((""+filename).lower().endswith(('.png', '.jpg', '.jpeg'))==False):
    	return {'result': 'Wrong File Extension'}


    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    model = load_model('COVID19.h5')
    CATEGORIES = ["COVID-19", "no COVID-19"]
    img = cv2.imread(UPLOAD_FOLDER+"/"+filename)
    img = cv2.resize(img,(224,224))
    img = img.reshape(1,224,224,3)
    prediction = model.predict(img)
    s3 = boto3.client('s3', aws_access_key_id=ACCESS_KEY,aws_secret_access_key=SECRET_KEY)
    s3.upload_file(UPLOAD_FOLDER+"/"+filename,bucket,UPLOAD_FOLDER+"/"+CATEGORIES[int(round(prediction[0][0]))]+filename,ExtraArgs={"ACL":"public-read","ContentType":file.content_type})
    logger.info(UPLOAD_FOLDER+"/"+filename)
    global x
    x = filename    
    return {'result': CATEGORIES[int(round(prediction[0][0]))]}


@app.route('/uploadlc', methods=['POST'])
def fileUploadlc():
    target=os.path.join(UPLOAD_FOLDER,'')
    if not os.path.isdir(target):
        os.mkdir(target)

		
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    if((""+filename).lower().endswith(('.png', '.jpg', '.jpeg'))==False):
    	return {'result': 'Wrong File Extension'}
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    model = load_model('cancer.h5')
    CATEGORIES = ["LUNG CANCER", "no LUNG CANCER"]
    img = cv2.imread(UPLOAD_FOLDER+"/"+filename)
    img = cv2.resize(img,(224,224))
    img = img.reshape(1,224,224,3)
    prediction = model.predict(img)
    logger.info(UPLOAD_FOLDER+"/"+filename)
    global x
    x = filename    
    return {'result': CATEGORIES[int(round(prediction[0][0]))]}


if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True,host="0.0.0.0",use_reloader=False)