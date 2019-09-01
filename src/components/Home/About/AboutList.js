import React, { Component } from 'react';
import AboutItem from './AboutItem';

class AboutList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            {items.map((item, index) => (
              <AboutItem
                time={item.time}
                title={item.title}
                caption={item.caption}
                src={item.src}
                inverted={index % 2}
              />
            ))}
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutList;
