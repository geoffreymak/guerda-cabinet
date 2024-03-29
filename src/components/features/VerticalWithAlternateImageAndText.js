import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import guerdaImg from "images/guerda.jpg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const HeadingDescription = tw(SectionDescription)`text-center mx-auto`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default ({ heading = "", subheading = "", description = "" }) => {
  const cards = [
    {
      imageSrc: guerdaImg,
      subtitle: "Associée et fondateur du cabinet",
      title: "Guerda KANGA",
      description:
        "« Mon parcours, tant en cabinets d’avocats qu’en juridiction, m’a amené à vouloir me spécialiser en droit de la famille. La spécificité de cette matière découle de l’alliage entre la technicité du droit et la dimension humaine propre à chaque dossier. J’ai à cœur d’exercer ma profession en prenant en compte ces différents aspects afin de proposer des solutions adaptées à nos clients. »",
      url: "https://timerse.com",
    },

    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //   subtitle: "Collaboratrice",
    //   title: "Julie HOARAU",
    //   description:
    //     "« Le droit est une discipline complexe. En droit de la famille, les avocats ne sont consultés que lorsqu’un problème se pose. Il faut avoir une dimension psychologique importante en plus de notre connaissance du droit. C’est ce que j’aime dans mon métier. »",
    //   url: "https://timerse.com",
    // },

    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    //   subtitle: "Collaboratrice",
    //   title: "Claudia FROELICHER",
    //   description:
    //     "« Mon parcours, tant en cabinets d’avocats qu’en juridiction, m’a amené à vouloir me spécialiser en droit de la famille. La spécificité de cette matière découle de l’alliage entre la technicité du droit et la dimension humaine propre à chaque dossier. J’ai à cœur d’exercer ma profession en prenant en compte ces différents aspects afin de proposer des solutions adaptées à nos clients. »",
    //   url: "https://timerse.com",
    // },
  ];

  return (
    <Container id="team">
      <SingleColumn>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && (
            <HeadingDescription>{description}</HeadingDescription>
          )}
          {/* <HeadingTitle>Notre équipe</HeadingTitle>
          <HeadingDescription>
            Vous feriez mieux d'avoir une équipe tout aussi dure d'avocats
            pointilleux pour devenir gagnant(e) du tribunal!
          </HeadingDescription> */}
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
