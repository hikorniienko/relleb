import React, { FC } from 'react';
import styled from './style.module.scss';

import Input from '../../atoms/input/component';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';
import BlockPrimary from '../../atoms/block-primary/component';
import ScrollLine from '../../molecules/scroll-line/component';
import Share from '../../organisms/share/component';
import BlogArticleImage from '../../organisms/blog-article-image/component';

import UlCheck from '../../molecules/ul-check/component';
import UlCheckLi from '../../atoms/ul-check-li/component';

import Trustpilot from '../../organisms/trustpilot/component';

import aboutImg from './about.png';

import BlogArticleP from '../../organisms/blog-article-p/component';
import BlogArticleBanner from '../../organisms/blog-article-banner/component';
import BlogArticleInfo from '../../organisms/blog-article-info/component';
import BlogArticleQuote from '../../organisms/blog-article-quote/component';
import BlogArticleDetails from '../../organisms/blog-article-details/component';

import Avatar from '../../molecules/avatar/component';
import Tags from '../../molecules/tags/component';
import Tag from '../../atoms/tag/component';

import BlogSitebarNav from '../../organisms/blog-sitebar-nav/component';

import HomeKnowledges from '../../organisms/home-knowledges/component';

import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import ModalAlert from '../../organisms/modal-alert/component';
import ModalSwipe from '../../organisms/modal-swipe/component';
import ModalSwipeBlock from '../../molecules/modal-swipe-block/component';

const BlogArticle: FC = () => (
  <>
    <ModalAlert
      img="img/modal-alert/1.png"
      button="Lets go"
      text="Watch authentication calculator"
    />

    <ModalAlert
      img="img/modal-alert/2.png"
      button="Lets go"
      text="Watch authentication calculator"
      light
    />

    <ModalAlert button="Lets go" text="Watch authentication calculator" />

    <ModalAlert
      img="img/modal-alert/3.png"
      button="Lets go"
      text="Watch authentication calculator"
      light
    />

    <ModalSwipe>
      <ModalSwipeBlock />
    </ModalSwipe>

    <article className={styled.article}>
      <div className={styled.scrollLine}>
        <div className="container">
          <ScrollLine />
        </div>
      </div>
      <div className="container">
        <div className={styled.title}>
          <h1>
            We work with certfied watchmakers, and it is the most complete watch
            verification service
          </h1>
          <div className={styled.titleShared}>
            <Share />
          </div>
        </div>

        <div className={styled.header}>
          <div className={styled.headerPicture}>
            <BlogArticleImage
              png="img/watchworld/1.png"
              alt="blog main img"
              figcaption="Photo made by Lorris Gremduet"
            />
          </div>
          <div className={styled.headerBox}>
            <BlockPrimary className={styled.headerPrimary} beforeLine>
              <h3>Want to check if a watch is real</h3>
              <div className={styled.headerPrimaryUl}>
                <UlCheck>
                  <UlCheckLi>
                    Zero risk purchase - сheck a watch before you buy it
                  </UlCheckLi>
                  <UlCheckLi>
                    Authentication by brand-certified watchmakers
                  </UlCheckLi>
                </UlCheck>
              </div>
              <Button className={styled.headerPrimaryBtn}>Check a watch</Button>
              <Trustpilot />
            </BlockPrimary>
          </div>
        </div>

        <section className={styled.page}>
          <div className={styled.pageNav}>
            <ul>
              <li>
                <Link to="section_1" smooth offset={-120}>
                  The Rolex serial number check explained
                </Link>
              </li>
              <li>
                <Link to="section_2" smooth offset={-120}>
                  Can I do the Rolex serial number check?
                </Link>
              </li>
              <li>
                <Link to="section_3" smooth offset={-120}>
                  How to perform the check
                </Link>
              </li>
              <li>
                <Link to="section_4" smooth offset={-120}>
                  The data-book explained
                </Link>
              </li>
              <li>
                <Link to="section_5" smooth offset={-120}>
                  Rolex model numbers
                </Link>
              </li>
              <li>
                <Link to="section_6" smooth offset={-120}>
                  Rolex clasp codes
                </Link>
              </li>
              <li>
                <Link to="section_7" smooth offset={-120}>
                  Why the checks are not waterproof...
                </Link>
              </li>
              <li>
                <Link to="section_8" smooth offset={-120}>
                  General Q&A
                </Link>
              </li>
            </ul>
          </div>
          <div className={styled.pageContent}>
            <section id="section_1">
              <h2>
                The Rolex serial number
                <br />
                check explained
              </h2>
              <BlogArticleP showP={1} dissableLaptop>
                <p>
                  Many people think you can actually{' '}
                  <a href="#">verify the authenticity</a> of a Rolex watch based
                  on the Rolex watch serial number check. Of course it gives you
                  some comfort as fake and replica Rolex watches in many cases
                  don’t carry a correct serial number (or an existing serial
                  number), but it is not that based on a serial number alone you
                  will know if your watch is authentic.
                </p>
                <p>
                  In our opinion it can indicate if a Rolex is fake. For example
                  when the serial number simply never existed. But to know if a
                  Rolex is real, there are many more checks to be executed.
                </p>
                <p>
                  The serial number check will at least answer the question in
                  what year your Rolex was issued. And if it corresponds with
                  the box, papers, bracelet and model of your watch.
                </p>
                <p>
                  In this blog we explain how to perform the check. But also why
                  it is not waterproof. Ultimately we do have you covered and
                  will explain how we authenticated a Rolex Submariner Hulk step
                  by step. If you are looking to buy a pre-owned Rolex, we
                  advise you to have a Rolex watch{' '}
                  <a href="#">authentication service</a>. We will also explain
                  why!
                </p>
              </BlogArticleP>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                  figcaption="Photo made by Lorris Gremduet"
                />
              </div>
            </section>
            <section id="section_2">
              <h2>Can I do the Rolex serial number check?</h2>
              <p>
                You can definitely perform this check yourself. First locate the
                serial number on the Rolex. Second, find your year of issuance
                in the serial number data book. Third, check if your serial
                number corresponds with the guarantee certificate. Fourth, check
                the production year with your the age of your Rolex. Fifth,
                observe the quality of the engraving. Additionally you can also
                verify if the year of issuance corresponds with your box and
                papers. We will explain these steps in detail below.
              </p>
              <p>
                You may encounter a Rolex without serial number engraved on the
                case. Sometimes these are faded due to really heavy wear or
                erased by someone. Please note this should be considered a huge
                red flag. In case of stolen watches, the serial number was often
                erased as this would clear out direct any leads to the watch. So
                our advise is to never buy a Rolex without serial number
                engraved on the case. For models with the serial number in the
                rehaut, the same applies. It must be present.
              </p>
              <p>
                In case you are looking to buy a watch online, avoid buying a
                fake! Make sure to check out this service which makes sure your
                watch is 100% real!
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
            </section>

            <section>
              <h2 id="section_3">How to perform the check</h2>
              <p>
                Our Rolex watchmakers have performed hundreds of Rolex serial
                number checks in the past 15 years. This is actually a crucial
                step when authenticating a Rolex watch, but as essential as the
                serial number itself is, the quality of how the serial number is
                engraved on the Rolex is maybe even more important.
              </p>
              <p>We perform the following steps:</p>
              <p>
                *Removing the bracelet when the serial number is between the
                lugs* Observe the serial number on the case (at 6 oclock in the
                rehaut or between the lugs for older models) Check if the
                correct serial number is also included on the International
                guarantee card or papers Serial number lookup. Verify if it
                resonates with the ageing of the watch (see date book below)
                During a watch authentication service, details matter the most.
                We make sure that the quality of the inscription of the serial
                number is done in accordance with the quality and finishing that
                is applied by Rolex tools. This is basically shown by the
                quality of the engraving that can only be concluded by an
                experienced Rolex watchmaker or by comparing to a real Rolex.
              </p>
              <p>We will explain the steps in detail.</p>
            </section>
            <div className={styled.margin}>
              <BlogArticleBanner
                className={styled.banner}
                title="Want to check if a watch is real"
                button="Get a free quote"
                list={[
                  'Components authenticity & condition',
                  'Serial number and stolen check',
                  'Timekeeping tests',
                ]}
                img="img/banner/1.png"
              />
            </div>
            <section>
              <p>
                <strong>
                  <span className={styled.colorBlue}>Step 1.</span> Removing the
                  bracelet
                </strong>
              </p>
              <p>
                If you have a watch sold before 2007, the serial number is most
                likely located between the lugs. You will have to remove the
                bracelet. Remove the bracelet with the right tools and dont do
                this if you are not a watchmaker. Be careful, you may damage the
                case or bracelet if not done properly
              </p>
              <p>
                <strong>
                  <span className={styled.colorBlue}>Step 2.</span> The location
                  of the serial number
                </strong>
              </p>
              <p>
                You can find the 4-8 digits Rolex serial number inside the
                rehaut (newer models after c.2007) or between the lugs at 6
                oclock (models before c.2007).
                <br />
                <br />
                Where the serial number is located:
                <br />
                <br />
                6 o’clock rehaut (inside case ring of the watch) or at 6 oclock
                on the outside of the case between the lugs for older Rolexes.
                See photos below.
                <br />
                <br />
                What the look for:
                <br />
                <br />
                The 4-8 digits of the serial number (e.g.761Z1R123)
                <br />
                <br />
                The images below will help you to find the serial number in case
                you want to perform the Rolex serial number check by yourself.
                Dont mistake the reference numbers for the serial number. Or
                vice versa. The Rolex reference numbers are located between the
                lugs at 12 o clock.
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <p>
                <strong>
                  <span className={styled.colorBlue}>Step 3.</span> Verify with
                  box and papers
                </strong>
              </p>
              <p>
                Verify if the serial number is also included on the Rolex
                guarantee papers (vintage Rolex watches) or on the Rolex
                guarantee card. Please note, papers and cards can be faked as
                well. Make sure to check with a certified watchmaker if the
                cards or papers are correct. Another option is to research which
                papers or cards would be issued in a certain year. In our blog
                about how we authenticated a 2020 Rolex Submariner we explain
                how we authenticated the guarantee card.
              </p>
              <p>
                In case you dont have a full set (or the papers at least) it is
                not possible to verify the Rolex serial number check with
                official Rolex papers. Please note, when observing vintage
                papers or cards, it can be extremely hard to distinguish if they
                are correct. The reason is that you can easily buy authentic
                Rolex papers without any serial numbers included on it and fake
                it. Thus you can create your own Rolex Guarantee paper including
                the serial number of your own Rolex. This will make sure you
                fool somebody who thinks the Rolex serial number check can be
                performed by just comparing the serial number on the watch with
                the papers. With a rough estimate we think about 70% of the
                papers for vintage watches are faked. Just because it is so easy
                to fake and it gives you a premium of easy more than €500.
              </p>
              <p>
                Nevertheless, our Rolex watchmakers do know where to look for.
                As said they know what Rolex papers or cards where issued in
                which year and also know how how to check the ageing of ink and
                perforated serial numbers. This is a craft that comes close to
                authenticating or validating a Rembrandt painting. As said, a
                proper Rolex serial number check is not easy.
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <p>
                <strong>
                  <span className={styled.colorBlue}>Step 4.</span> Rolex serial
                  number lookup
                </strong>
              </p>
              <p>
                When you know your serial number, you can look up in which year
                it was produced. In order to understand if the Rolex ageing
                matches the serial number production date. The date on your
                guarantee card (sold date) may differ from the year of
                production. No need for panic. Back in the old days, not all
                Rolex were directly sold out. The good old days we would say.
              </p>
              <p>
                We have included a data book at the bottom of this blog
                including serial numbers and the year certain Rolex serial
                numbers were produced. Including an explanation how to find the
                production year and match it to the Rolex serial number year.
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <p>
                <strong>
                  <span className={styled.colorBlue}>Step 5.</span> Observing
                  quality of the engraving
                </strong>
              </p>
              <p>
                When you know your serial number, you can look up in which year
                it was produced. In order to understand if the Rolex ageing
                matches the serial number production date. The date on your
                guarantee card (sold date) may differ from the year of
                production. No need for panic. Back in the old days, not all
                Rolex were directly sold out. The good old days we would say.
              </p>
              <p>
                We have included a data book at the bottom of this blog
                including serial numbers and the year certain Rolex serial
                numbers were produced. Including an explanation how to find the
                production year and match it to the Rolex serial number year.
              </p>
            </section>
            <div className={styled.margin}>
              <BlogArticleInfo
                title="Want us to help you authenticate your watch?"
                button="Get a free quote"
              />
            </div>
            <section id="section_4">
              <h2>The data-book explained</h2>
              <p>An introduction to the databook</p>
              <p>
                The serial number data-book includes an explanation of how the
                Rolex serial numbers are determined and what they stand for. Say
                if you have a Rolex Submariner from the year 1983 you can check
                if the serial number you have resonates with the serial numbers
                produced and sold by Rolex in 1987. Since Rolex does use cases
                and materials throughout years and some watches, for example
                Rolex Daytonas that sold very bad back in the days, this gives a
                mere indication if the period resonates with the Rolex you are
                checking. A certain Rolex Daytona can be produced in 1983, but
                can be sold in 1985. It is something you cannot imagine these
                days, but it was possible. As such the papers may say 1985 and
                the serial number refers to 1983. Therefore the check with the
                data-book (which something our Rolex watchmakers always do when
                they perform the Rolex serial number check) is essential but not
                an exact study.
              </p>
              <p>
                We have the Rolex serial number database so you can check if
                your Rolex serial number is period correct. Since 2011 the Rolex
                serial numbers are random characters.
              </p>
              <h3>An introduction to the databook</h3>
              <p>
                The serial number data-book includes an explanation of how the
                Rolex serial numbers are determined and what they stand for. Say
                if you have a Rolex Submariner from the year 1983 you can check
                if the serial number you have resonates with the serial numbers
                produced and sold by Rolex in 1987. Since Rolex does use cases
                and materials throughout years and some watches, for example
                Rolex Daytonas that sold very bad back in the days, this gives a
                mere indication if the period resonates with the Rolex you are
                checking. A certain Rolex Daytona can be produced in 1983, but
                can be sold in 1985. It is something you cannot imagine these
                days, but it was possible. As such the papers may say 1985 and
                the serial number refers to 1983. Therefore the check with the
                data-book (which something our Rolex watchmakers always do when
                they perform the Rolex serial number check) is essential but not
                an exact study.
              </p>
              <p>
                We have the Rolex serial number database so you can check if
                your Rolex serial number is period correct. Since 2011 the Rolex
                serial numbers are random characters.
              </p>
              <h3>Rolex serial number lookup table</h3>
              <p>
                An easy way to check your Rolex serial number is with the
                database below which show the numbering system used by Rolex in
                the past.
              </p>
              <p>
                You can check the Rolex year by serial number by the following
                steps:
              </p>
              <p>
                When you obtained your serial number. Use the CTRL+F (buttons on
                your keyboard) and start with typing in the serial number until
                you have no hit anymore. Then go one number back and you will be
                in the period of your serial number.
              </p>
            </section>
            <section id="section_5">
              <h2>Rolex model numbers</h2>
              <p>
                The Rolex model numbers are also engraved on a watch. These
                numbers are also called reference numbers. Based on these
                numbers you know which model it is and which specifics it must
                carry. The model numbers indicate the material of the watch.
                Like steel, yellow gold, rose gold and platinum. Which
                complications it must have. Like date, chronograph settings
                etcetera. And also in which period it must be produced. Certain
                Rolex models are only built for a specific period.
              </p>
              <h3>Where to find the model number</h3>
              <p>
                You can find the Rolex model number between the lugs at 12 o
                clock. All Rolex watches, vintage and new, have the model number
                engraved between the lugs at 12 o clock.{' '}
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <h3>What does the model number say?</h3>
              <p>
                The model number can tell you more than the period the watch is
                produced. It can also tell you the material used and type of
                bezel that should come with it. The 4-6 digit model number can
                be divided in three sections. For example a Rolex Datejust with
                model number 1603,.
              </p>
              <p>
                <span className={styled.colorBlue}>16</span> = Rolex Datejust
              </p>
              <p>
                <span className={styled.colorBlue}>0</span> = Stainless steel
                material
              </p>
              <p>
                <span className={styled.colorBlue}>3</span> = fluted bezel
              </p>
              <p>
                You can easily compare a model number with the following tables
              </p>
              <h3>The model number tables</h3>
              <p>
                <span className={styled.colorBlue}>Step 1</span> the model:
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <p>
                <span className={styled.colorBlue}>Step 2</span> the material:
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <p>
                <span className={styled.colorBlue}>Step 3</span> the bezel type
                (if applicable):
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
            </section>
            <div className={styled.margin}>
              <BlogArticleBanner
                className={styled.banner}
                title="Want to check if a watch is real Want to check if a watch is real"
                button="Get a free quote"
                list={[
                  'Components authenticity & condition Get a free quote Get a free quote',
                  'Serial number and stolen check',
                  'Timekeeping tests',
                ]}
                img="img/banner/2.png"
              />
            </div>
            <div className={styled.margin}>
              <BlogArticleBanner
                className={styled.banner}
                title="Want to check if a watch is real"
                button="Get a free quote"
                list={[
                  'Components authenticity & condition',
                  'Serial number and stolen check',
                  'Timekeeping tests',
                ]}
                img="img/banner/3.png"
              />
            </div>
            <div className={styled.margin}>
              <BlogArticleBanner
                className={styled.banner}
                title="Want to check if a watch is real"
                button="Get a free quote"
                list={[
                  'Components authenticity & condition',
                  'Serial number and stolen check',
                  'Timekeeping tests',
                ]}
                img="img/banner/4.png"
              />
            </div>
            <div className={styled.margin}>
              <BlogArticleBanner
                className={styled.banner}
                title="Want to check if a watch is real"
                button="Get a free quote"
                list={[
                  'Components authenticity & condition',
                  'Serial number and stolen check',
                  'Timekeeping tests',
                ]}
                img="img/banner/5.png"
                position
              />
            </div>
            <div className={styled.margin}>
              <BlogArticleBanner
                className={styled.banner}
                title="Want to check if a watch is real"
                button="Get a free quote"
                list={[
                  'Components authenticity & condition',
                  'Serial number and stolen check',
                  'Timekeeping tests',
                ]}
                img="img/banner/6.png"
              />
            </div>
            <section id="section_6">
              <h2>Rolex clasp codes</h2>
              <p>
                Many Rolex watches have clasp codes engraved on the inside of
                the clasp hinge. These Rolex clasp codes are also named bracelet
                codes. They effectively tell you if a clasp is period and model
                correct. Some models were for example issued on Oyster bracelets
                and some (also) on jubilee bracelets. In addition, if you know
                your watch is from a specific period. You can check if the clasp
                and bracelet that comes with it, can be the original one. We say
                can be with a reason. We will explain that later.
              </p>
              <div className={styled.img}>
                <BlogArticleImage
                  png="img/watchworld/1.png"
                  alt="blog main img"
                />
              </div>
              <h3>Why it is only an indication</h3>
              <p>
                The clasp code will give you an indication of the period and
                model correctness. In other words, it will give sense about if
                the bracelet was issued with the watch. Many watches, especially
                vintage, have replaced bracelets. After wearing a watch multiple
                years, the bracelet should be replaced to ensure you wont lose a
                watch.
              </p>
              <p>
                But, if you now only have a Rolex Submariner case from 1988. You
                can easily find a bracelet for sale online on eBay that is from
                that same year. And then sell it together. It makes sure the
                watch set is correct. But it wasnt originally sold with that
                specific bracelet.
              </p>
            </section>
            <section id="section_7">
              <h2>Why the checks are not waterproof...</h2>
              <p>
                Unfortunately the Rolex serial number check is not waterproof.
                Basically it is a number which is engraved in the rehaut of the
                Rolex at the 6 oclock hour mark or between the lugs on the
                outside of the case. The clasp codes and model numbers only give
                an indication on its own. If a fake watch maker is really
                thorough, he makes sure the Rolex serial number he uses is
                correct. By making sure the serial number resonates with the
                existing serial numbers (i.e. period correct and model correct)
                and the clasp and model numbers are correct for the time and
                period.
              </p>
              <p>
                So, If a replica watch carries a genuine and correct serial
                number, the serial number doesnt give away it is a fake…
              </p>
              <h3>Rolex authentication service</h3>
              <p>
                It really takes a trained and experienced person to authenticate
                a watch. Observing for example the ageing, engraving quality,
                material quality and many more points is needed to conclude if a
                watch is real. Therefore we advise you to have your watch
                authenticated by a Rolex watchmaker.
              </p>
              <div className={styled.margin}>
                <BlogArticleQuote>
                  <p>
                    I have always been a watch enthusiast – ironically, when
                    growing up, I wanted to become a watch technician so that I
                    could enjoy working with complicated watches.
                  </p>
                  <p>
                    Obviously, life had a different path destined for but my
                    passion for watches always stayed with me to date.
                  </p>
                </BlogArticleQuote>
              </div>
              <div className={styled.margin}>
                <BlogArticleQuote light>
                  <p>
                    I have always been a watch enthusiast – ironically, when
                    growing up, I wanted to become a watch technician so that I
                    could enjoy working with complicated watches.
                  </p>
                  <p>
                    <b>
                      Obviously, life had a different path destined for but my
                      passion for watches always stayed with me to date.
                    </b>
                  </p>
                </BlogArticleQuote>
              </div>
            </section>
            <section id="section_8">
              <h2>General Q&A</h2>
              <BlogArticleDetails
                className={styled.details}
                open
                title="How do you check if a Rolex is real"
              >
                <p>
                  To spot a fake Rolex can be easy. Knowing it is real is
                  definitely not. It means observing the watch in detail and
                  validating if it corresponds with research and the experience
                  you have available. Since this means experience and knowledge,
                  certified and experienced Rolex watchmakers are the best
                  positioned.
                </p>
                <p>
                  If you want to know how to tell if a Rolex watch is real, read
                  our blog real Rolex versus expensive fake Rolex. Or how we
                  authenticated a Rolex Submariner Hulk, which provides insights
                  in which details to observe and what steps to take. From
                  validating the workings of the watch, to the crown logos on
                  the glass, case and crown. We got it covered and supported
                  with photos.
                </p>
                <p>
                  One give away: if it is too good to be true, our guesses is
                  that it will be...
                </p>
              </BlogArticleDetails>
              <BlogArticleDetails
                className={styled.details}
                title="Can I verify authenticity of Rolex serial numbers?"
              >
                <p>
                  To spot a fake Rolex can be easy. Knowing it is real is
                  definitely not. It means observing the watch in detail and
                  validating if it corresponds with research and the experience
                  you have available. Since this means experience and knowledge,
                  certified and experienced Rolex watchmakers are the best
                  positioned.
                </p>
                <p>
                  If you want to know how to tell if a Rolex watch is real, read
                  our blog real Rolex versus expensive fake Rolex. Or how we
                  authenticated a Rolex Submariner Hulk, which provides insights
                  in which details to observe and what steps to take. From
                  validating the workings of the watch, to the crown logos on
                  the glass, case and crown. We got it covered and supported
                  with photos.
                </p>
                <p>
                  One give away: if it is too good to be true, our guesses is
                  that it will be...
                </p>
              </BlogArticleDetails>
              <BlogArticleDetails
                className={styled.details}
                title="Rolex serial number check for stolen watches"
              >
                <p>
                  To spot a fake Rolex can be easy. Knowing it is real is
                  definitely not. It means observing the watch in detail and
                  validating if it corresponds with research and the experience
                  you have available. Since this means experience and knowledge,
                  certified and experienced Rolex watchmakers are the best
                  positioned.
                </p>
                <p>
                  If you want to know how to tell if a Rolex watch is real, read
                  our blog real Rolex versus expensive fake Rolex. Or how we
                  authenticated a Rolex Submariner Hulk, which provides insights
                  in which details to observe and what steps to take. From
                  validating the workings of the watch, to the crown logos on
                  the glass, case and crown. We got it covered and supported
                  with photos.
                </p>
                <p>
                  One give away: if it is too good to be true, our guesses is
                  that it will be...
                </p>
              </BlogArticleDetails>
              <BlogArticleDetails
                className={styled.details}
                title="How to authenticate Rolex serial number"
              >
                <p>
                  To spot a fake Rolex can be easy. Knowing it is real is
                  definitely not. It means observing the watch in detail and
                  validating if it corresponds with research and the experience
                  you have available. Since this means experience and knowledge,
                  certified and experienced Rolex watchmakers are the best
                  positioned.
                </p>
                <p>
                  If you want to know how to tell if a Rolex watch is real, read
                  our blog real Rolex versus expensive fake Rolex. Or how we
                  authenticated a Rolex Submariner Hulk, which provides insights
                  in which details to observe and what steps to take. From
                  validating the workings of the watch, to the crown logos on
                  the glass, case and crown. We got it covered and supported
                  with photos.
                </p>
                <p>
                  One give away: if it is too good to be true, our guesses is
                  that it will be...
                </p>
              </BlogArticleDetails>
            </section>
          </div>
          <aside className={styled.sitebar}>
            <div className={`${styled.about} ${styled.sitebarMargin}`}>
              <h3 className={styled.sitebarTitle}>About Relleb</h3>
              <Picture
                className={styled.aboutImg}
                png={aboutImg}
                alt="about image"
              />
              <p>
                Authentication services by certified watchmakers for your luxury
                watch, whether you own it or plan to buy it
              </p>
            </div>
            <BlockPrimary className={`${styled.sitebarMargin}`}>
              <h3 className={styled.sitebarTitle}>Our Services</h3>
              <hr />
              <BlogSitebarNav>
                <li>
                  <a href="#">Authentication</a>
                </li>
                <li>
                  <a href="#">Quick sale</a>
                </li>
                <li>
                  <a href="#">Safe marketplace</a>
                </li>
                <li>
                  <a href="#">Serial number check</a>
                </li>
                <li>
                  <a href="#">Stolen check</a>
                </li>
                <li>
                  <a href="#">Watch register</a>
                </li>
                <li>
                  <a href="#">Servicing</a>
                </li>
                <li>
                  <a href="#">Servicing</a>
                </li>
              </BlogSitebarNav>
            </BlockPrimary>
            <BlockPrimary className={`${styled.sitebarMargin}`}>
              <h3 className={styled.sitebarTitle}>Guides</h3>
              <hr />
              <BlogSitebarNav>
                <li>
                  <a href="#">Authentication Service</a>
                </li>
                <li>
                  <a href="#">Buying</a>
                </li>
                <li>
                  <a href="#">Servicing</a>
                </li>
                <li>
                  <a href="#">Selling</a>
                </li>
              </BlogSitebarNav>
            </BlockPrimary>
            <BlockPrimary className={styled.subscribe}>
              <h3 className={styled.subscribeTitle}>
                <span>Subscribe</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="7.5" fill="#3760EF" />
                  <path
                    d="M6.66634 10L9.16634 12.5L13.333 7.5"
                    stroke="white"
                  />
                </svg>
              </h3>
              <p>and get a free shipping on your first order</p>
              <Input
                className={styled.subscribeInput}
                placeholder="Yourname111@gmail.com"
              />
              <Button className={styled.subscribeButton}>Subscribe</Button>
            </BlockPrimary>
          </aside>
        </section>
        <footer className={styled.footer}>
          <div className={styled.author}>
            <Avatar
              png="img/avatars/blog-avatar.png"
              className={styled.authorAvatar}
            />
            <span>Written by</span>
            <p>
              <strong>Jessy Short</strong>, watch enthusiast, owner of fratello
              watch enthusiast, owner of fratello
            </p>
          </div>
          <div className={styled.footerInfo}>
            <div className={styled.tags}>
              <Tags>
                <Tag>Rolex</Tag>
                <Tag>Watch video blog</Tag>
                <Tag>Omega</Tag>
              </Tags>
            </div>
            <div className={styled.date}>
              <div className={styled.footerShare}>
                <Share />
              </div>
              <span>Last updated December 21, 2021</span>
            </div>
          </div>
        </footer>
      </div>
      <HomeKnowledges />
    </article>
  </>
);

export default BlogArticle;
