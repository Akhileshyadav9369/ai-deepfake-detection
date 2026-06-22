import os
import numpy as np
import tensorflow as tf

from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model

# IMAGE SETTINGS
IMG_SIZE = 224
BATCH_SIZE = 16

# DATASET PATH
dataset_path = "dataset"

# IMAGE GENERATOR
datagen = ImageDataGenerator(
    rescale=1./255,
    validation_split=0.2
)

# TRAIN DATA
train_data = datagen.flow_from_directory(
    dataset_path,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='binary',
    subset='training'
)

# VALIDATION DATA
val_data = datagen.flow_from_directory(
    dataset_path,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='binary',
    subset='validation'
)

# LOAD PRETRAINED MODEL
base_model = MobileNetV2(
    weights='imagenet',
    include_top=False,
    input_shape=(IMG_SIZE, IMG_SIZE, 3)
)

base_model.trainable = False

# ADD CUSTOM LAYERS
x = base_model.output
x = GlobalAveragePooling2D()(x)

x = Dense(128, activation='relu')(x)

output = Dense(1, activation='sigmoid')(x)

model = Model(inputs=base_model.input, outputs=output)

# COMPILE MODEL
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# TRAIN MODEL
model.fit(
    train_data,
    validation_data=val_data,
    epochs=5
)

# SAVE MODEL
os.makedirs("model", exist_ok=True)

model.save("model/deepfake_model.h5")

print("MODEL TRAINED SUCCESSFULLY")