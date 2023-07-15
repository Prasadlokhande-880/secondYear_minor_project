import numpy as np
import pandas as pd
import cv2

from google.colab import drive

drive.mount('/content/drive')


from sklearn.naive_bayes import GaussianNB

model = GaussianNB()

model.fit(X_train,Y_train)

# model.predict(X_test,Y_test)
Y_pred=model.predict(X_test);

Y_pred

data = pd.read_csv('/content/drive/MyDrive/Dataset/Trainingnew.csv')

data

X = data.drop(["prognosis"],axis=1)
Y = data["prognosis"]
Y

from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(X,Y,test_size = 0.3,random_state = 42)
X_test

Y_test

import sklearn.metrics
acc =sklearn.metrics.accuracy_score(Y_test, Y_pred)*100
acc

X_train.columns


prasad = {
     'sore_throat':[],
    'fever':[],
    'swollen_glands':[],
    "congestion":[],
    'headace':[]
}

prasadj = pd.DataFrame(prasad)
prasadj
pre=model.predict(prasadj)