import {
    FooterContainer,
    SocialContainer,
    LicenseContainer,
    LicenseText,
  } from "./styles";
  
  export const FooterComponent = () => {
    return (
      <FooterContainer>
        <SocialContainer>
          <a target="_blank" href="https://github.com/Cgfreire">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </a>
  
          <a
            target="_blank"
            href="https://www.linkedin.com/in/caio-gaiba-freire-4702b122a/"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </a>
        </SocialContainer>
        <LicenseContainer>
          <LicenseText>
            Projeto desenvolvido para matéria de Front-End na Universidade
            Unisales de Vitória 
            Professor Reposável: James
          </LicenseText>
        </LicenseContainer>
      </FooterContainer>
    );
  };