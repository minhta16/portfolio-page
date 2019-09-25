import React, { Component } from 'react';
import Image from 'components/Common/Image';
import introImg from 'assets/img/portfolio/swedish/intro.jpg';
import zoomImg from 'assets/img/portfolio/swedish/zoom.jpg';
import BaseModal from './BaseModal';

class SwedishModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">The Swedish Immigrant Trail Game</h2>
        <p className="item-intro text-muted">
          Immerse yourself into the path to America of a Swedish immigrant
        </p>
        <p className="item-intro text-muted">August 2017 - August 2018</p>
        <p>
          Early 2018, a group of history students, led by Dr. Brian Leech, was very keen on their
          research about Swedish immigration to America during the 18th century. They came up with a
          very interesting idea of turning the real stories of the Swedish immigrants into a
          role-playing game. They constructed an adventurous story of Anders Bengtsson and Lovisa
          Eriksdotter which has various endings depends on the player’s decisions. We divided into
          teams in our Fall 2018 Software Development class to turn this beautiful idea into
          reality. We started with developing our engine and data structure for the game. We wanted
          to create the game itself, bundled with a game builder for our clients to modify the game
          content. Our team has 4 people and we divided into two groups for the game, which is
          powered by libGDX for Java, and the game builder, which utilizes the JavaFx engine.
        </p>
        <Image className="img-fluid d-block mx-auto" src={introImg} alt="" />
        <p className="item-intro text-muted">Swedish Immigrant Trail game intro screen.</p>
        <h3>During the Trimester</h3>
        <p>
          We completed the first part of the game in a trimester. The game has limited
          functionalities, including moving between screens and make decisions, and it lacks other
          user-friendly functionalities. I realized that the majority of players would be people who
          are interested in learning about Swedish history. This includes a large portion of older
          people and they are not so comfortable staring at a monitor, let alone reading tiny text
          and seeing tiny images. With that in mind, I continued building the game after the course
          finished.
        </p>
        <h3>Later Development</h3>
        <Image className="img-fluid d-block mx-auto" src={zoomImg} alt="" />
        <p className="item-intro text-muted">The image zooming feature of the game.</p>
        <p>
          Unfortunately, my teammates were not able to continue the project. I then become the sole
          developer of the game and I spent about 5 months building the latter half of the game
          while implementing additional user-friendly features. The game ended up getting polished
          and live on the Swenson Center’s website for showcasing.
        </p>
        <h3>Takeaways</h3>
        <h5>Agile methodology and problem-solving as a team</h5>
        <p>
          We spent 30 minutes in every class to scrum, a fundamental practice of agile methodology.
          By doing scrum meetings a few times each week, my teammates and I understood each other’s
          tasks and we can prioritize our tasks accordingly to avoid blocking one another. I figured
          out that effective communication is very important and can really push the team forward if
          done correctly.
        </p>
        <h5>Design Patterns and OOP Concepts in practice</h5>
        <p>
          We took lots of slow steps during the implementation of this game. We spent about 3 weeks
          in the beginning just to brainstorm the idea for the game and to design our data
          structure. Taking time our time during the initial steps creates a playground to practice
          OOP principles that we acquired in lectures. We also spent some time to talk about useful
          design patterns in designing elegant software.
        </p>
        <h5>Knowledge about Swedish History</h5>
        <p>
          It was very fascinating to be a part of the journey of an immigrant to America. I also had
          a look at different Swedish historical archives in preparation for this game.
        </p>
        <p>
          Generally, implementing this game helps me realize how important good system design is for
          The Swedish Immigrant Trail made me appreciate history more than ever. It is entirely
          different from studying history at school when I took part in the story as an adventurer
          exploring the New World. Most importantly, I finished my first refined product using my
          knowledge in Java and data structure. Even though there are still some questionable
          decisions I made during the implementation progress, I am proud of the end result.
        </p>
        <p className="item-intro">
          {`You can check out the game here: `}
          <a
            href="https://www.augustana.edu/swenson/swedishvideogame"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.augustana.edu/swenson/swedishvideogame
          </a>
          .
        </p>
      </BaseModal>
    );
  }
}

export default SwedishModal;
