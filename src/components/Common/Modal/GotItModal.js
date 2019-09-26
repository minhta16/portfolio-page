import React, { Component } from 'react';
import Image from 'components/Common/Image';
import hackathonImg from 'assets/img/portfolio/got-it/hackathon.jpeg';
import farewellImg from 'assets/img/portfolio/got-it/farewell.jpg';
import BaseModal from './BaseModal';

class GotItModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">Got It, inc.</h2>
        <p className="item-intro text-muted">
          Three months internship at one of the top Vietnamese startups
        </p>
        <p className="item-intro text-muted">May 2019 - August 2019</p>
        <p>
          In the summer of 2019, while I am in Vietnam, I took the opportunity to apply for and work
          as a Software Engineer Intern at a branch of Got It in Vietnam. The Silicon Valley-based
          startup’s vision is to spread knowledge and to make professional tasks easier with the
          help of Artificial Intelligent. Got It’s product line consists of PhotoStudy, an AI-based
          mobile app to help students with their homework, Natural Language to SQL, a tool to
          translate our language to SQL queries, and Excelchat, a tutoring service for Excel
          questions.
        </p>
        <p>
          In the 14 months internship, I collaborated with other software engineers and QA testers
          to implement features and, later on, set up the test automation framework for an
          unreleased product. I also took part in various training programs about test automation
          and big data and was a part of the team that won the second prize of Got It’s Test
          Automation Hackathon.
        </p>
        <Image className="img-fluid d-block mx-auto" src={hackathonImg} alt="Hackaton winners" />
        <p className="item-intro text-muted">Hackathon winners. Source: Got It, inc. Medium</p>
        <h3>Takeaways</h3>
        <h5>Corporation workflows</h5>
        <p>
          Got It uses a 10-step workflow for every task. I learned that it is a very efficient flow
          to organize and unite all parts of the organization towards the same goal. I also learned
          the IASK principle: Intelligence, Attitude, Skills, and Knowledge. It states that
          intelligence and attitude are the most important because we can learn anything as long as
          we are intelligent enough and has the right attitude for learning.
        </p>
        <h5>Effective work communication</h5>
        <p>
          Since my role as a software engineer is the link between product managers, designers, and
          testers, I have the chance to enforce my ability to communicate effectively among
          different platforms to ensure work quality. Additionally, the internship enables me to
          better prioritize tasks while working on multiple projects at once.
        </p>
        <Image className="img-fluid d-block mx-auto" src={farewellImg} alt="Farewel, Got It!" />
        <p className="item-intro text-muted">Farewell, Got It!. Source: Got It, inc.</p>
        <p>
          I have had a lot of fun and knowledge working at Got It. I had the chance to work with
          professionals who have been in the industry for more than 15 years and learned a lot about
          system architecture and effective work management. Furthermore, I acquired a large amount
          of deeper knowledge about the technical tools (React, Redux, Selenium, Behave,...) and how
          to use them for a complex system design.
        </p>
      </BaseModal>
    );
  }
}

export default GotItModal;
