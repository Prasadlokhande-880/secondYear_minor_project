import React from 'react';
import './about.css'; // Import the CSS file for styling
import Footer from '../containers/footer/Footer';
function About() {
  return (
    <div className='About_div'>
    <div>
      {/* Title */}
      <div className="MachineLearningwithPythonmin">
        <p className="Machine">PYTHON WITH NAIVE BAYES</p>
      </div>

      <h1 className="OUR">Welcome to Ourweb</h1>

      {/* Information sections */}
      <div className="main">
        {/* First information section */}
        <div className="first">
          <img className="mainimg" id="i" src="https://clgonline.in//static/all_collages/img/mit-academy-of-engineering-mitaoe-pune.jpg" alt="MITAOE" />
          <p className="maininfo">
            Welcome to the disease prediction platform developed by the students of MITAOE. We are dedicated to using the power of machine learning to help individuals and communities predict and prevent the onset of diseases.
          </p>
        </div>

        {/* Second information section */}
        <div className="second">
          <img className="mainimg" id="ii" src="https://miro.medium.com/max/1400/1*c_fiB-YgbnMl6nntYGBMHQ.jpeg" alt="Naive Bayes" />
          <p className="maininfo">
            Our platform utilizes the Naive Bayes algorithm, a powerful and efficient machine learning model that has been widely used in medical research. With this algorithm, we are able to analyze large amounts of health data and predict the likelihood of a patient developing a particular disease.
          </p>
        </div>

        {/* Third information section */}
        <div className="third">
          <img className="mainimg" id="iii" src="https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png" alt="Teamwork" />
          <p className="maininfo">
            Our team consists of passionate and dedicated students who are committed to making a positive impact on the world. We believe that by using technology and data to identify health risks, we can help individuals take proactive steps to maintain their health and prevent serious illnesses.
          </p>
        </div>

        {/* Fourth information section */}
        <div className="forth">
          <img className="mainimg" id="iv" src="https://www.allthingsdistributed.com/images/predictions21-1.jpg" alt="Platform" />
          <p className="maininfo">
            We are constantly updating and improving our platform to ensure that it remains at the forefront of disease prediction technology. We welcome feedback and suggestions from our users, as we strive to provide the most accurate and user-friendly service possible.
          </p>
        </div>
      </div>

      {/* Terms and conditions */}
    </div>
    <div className='footer_div'>
    <Footer/>
    </div>
    </div>
  );
}

export default About;
