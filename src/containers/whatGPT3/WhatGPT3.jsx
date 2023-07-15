import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is naive bayes" text="Naive Bayes is a simple but powerful probabilistic classification algorithm based on Bayes' theorem with an assumption of independence among the features. It is widely used in machine learning for tasks such as text classification, spam filtering, sentiment analysis, and disease prediction." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Here's a high-level overview of how the Naive Bayes algorithm works:</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Training Phase:" text="    The algorithm takes a labeled training dataset, where each instance is described by a set of features and associated with a class label.
    It calculates the prior probability of each class based on the frequency of occurrence in the training set." />
      <Feature title="Prediction Phase:" text="Given a new instance with a set of features, the algorithm calculates the posterior probability of each class using Bayes' theorem.
The posterior probability is the probability of the class given the observed features." />
      <Feature title="Mathematically" text="the Naive Bayes algorithm can be represented as:

P(class | features) = (P(class) * P(features | class)) / P(features)

Where:

    P(class | features) is the posterior probability of the class given the observed features." />
    </div>
  </div>
);

export default WhatGPT3;
