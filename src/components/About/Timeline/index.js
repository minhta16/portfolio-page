import React, { Component } from 'react';
import img1 from 'assets/img/about/1.jpg';
import img2 from 'assets/img/about/2.jpg';
import img3 from 'assets/img/about/3.jpg';
import img4 from 'assets/img/about/4.jpg';
import AboutList from './AboutList';

const items = [
  {
    time: '2013-2016',
    title: 'Kim Lien High School, Hanoi',
    caption: 'My high school time was in Vietnam with lots of memories.',
    src: img1,
  },
  {
    time: '2016-present',
    title: 'Augustana College, IL',
    caption:
      'The beginning of my college life in the United States. Augustana College marked the first milestone of my career in Computer Science.',
    src: img2,
  },
  {
    time: '2017',
    title: 'Sisu Vina',
    caption: 'I was a design intern when I was here.',
    src: img3,
  },
  {
    time: '2009-2011',
    title: 'Our Humble Beginnings',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    src: img4,
  },
];
class About extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">My journey</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <AboutList items={items} />
        </div>
      </section>
    );
  }
}

export default About;
