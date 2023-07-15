import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="To use our website, simply enter the symptoms you are experiencing into the provided text box. Our algorithm will then analyze the symptoms and provide a list of possible diseases that may be causing them, along with their probabilities. The user can then explore the suggested diseases and learn more about their symptoms, causes, and treatments." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="The conditional probability can be calculated using the joint probability, although it would be intractable. Bayes Theorem provides a principled way for calculating the conditional probability. The simple form of the calculation for Bayes Theorem is as follows the formula is : P(A|B) = P(B|A) * P(A) / P(B)" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Naive Bayes is a probabilistic algorithm that calculates the probability of a certain disease given the symptoms provided by the user. It works by analyzing the frequency of the symptoms in the training data and calculating the probability of each disease given the presence or absence of those symptoms." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Welcome to our website that predicts diseases based on the symptoms provided by the user. Our website uses a machine learning algorithm called Naive Bayes to make predictions about the disease that may be causing your symptoms." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="suggested diseases and learn more about their symptoms, causes, and treatments" />
      </div>
    </div>
  </div>
);

export default Blog;
