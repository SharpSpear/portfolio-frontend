import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-typist';
import {
  FaTwitter,
  FaGithub,
  FaMedium,
  AiOutlineMail,
  HiDownload,
  AiOutlineLink
} from 'react-icons/all';
import { Link } from 'react-router-dom';
import profile_image from '../../../assets/images/my_profile.jpg'

import { AnimatedButton } from '../../../common/components/UIElements';
import Resume from '../../../assets/documents/resume.pdf';
import 'react-typist/dist/Typist.css';
import './Hero.scss';

const words = ['web developer', 'technical writer', 'oss contributor'];

const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div id="hero">
      <Container>
        <div className="hero">
          <Row>
            <Col sm className="hero__content">
              <div>
                <h6>Hey!</h6>
                <h1>
                  <span className="hero__content__title">
                    <span className="hero__content__title-first">I'm</span>{' '}
                    <span className="hero__content__title-second">Maksim Kholin</span>
                  </span>
                </h1>
                <h2>
                  <div className="type-writer">
                    {count ? (
                      <Typist onTypingDone={() => setCount(0)}>
                        {words.map((word) => [
                          <span>{word}</span>,
                          <Typist.Backspace count={word.length} delay={1000} />
                        ])}
                      </Typist>
                    ) : (
                      ''
                    )}
                  </div>
                </h2>
                <p>I have a passion for technology.</p>
                <p className="know-more">
                  <Link to="/about">
                    Know More <AiOutlineLink />
                  </Link>{' '}
                  about me
                </p>
                <h6 className="hero__content__social">
                  Follow me{' '}
                  <span className="hero__content__social-icons">
                    {/* <Link to="/profiles/twitter"> */}
                    <Link to="/about">
                      <FaTwitter className="social-icon twitter" />
                    </Link>
                    {/* <Link to="/profiles/github"> */}
                    <Link to="/about">
                      <FaGithub className="social-icon github" />
                    </Link>
                    {/* <Link to="/profiles/medium"> */}
                    <Link to="/about">
                      <FaMedium className="social-icon medium" />
                    </Link>
                  </span>
                </h6>
                <div className="hero__content__main-btns">
                  <a href="mailto:spearbig1021@gmail.com">
                    <AnimatedButton>
                      <AiOutlineMail className="main-btn" />
                      &nbsp;Email&nbsp;Me
                    </AnimatedButton>
                  </a>
                  <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <AnimatedButton outline className="ms-4">
                      <HiDownload className="main-btn" />
                      &nbsp;Resume
                    </AnimatedButton>
                  </a>
                </div>
              </div>
            </Col>
            <Col sm className="hero__image" style={{margin:"auto", textAlign:"center"}}>
              <img
                id="hero-avatar"
                src={profile_image}
                style={{borderRadius:"50%"}}
                alt="Maksim Kholin"
                loading="eager"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
