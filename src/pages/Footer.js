import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 40px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const FooterText = styled.p`
  font-family: var(--montserrat);
  font-size: 16px;
  font-weight: 500;
  color: var(--footer);
  text-align: center;
`;

const TextAccent = styled.span`
  font-weight: 700;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        created by <TextAccent>carlos.pabon.code </TextAccent> -
        devChallenges.io
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
