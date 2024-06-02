export type Translation = {
  slogan: string;
  CTOslogan: string;
  czechRepublic: string;

  termsLink: string;
  GDPRLink: string;
  certificationLink: string;

  navbarHome: string;
  navbarGrills: string;
  navbarAbout: string;
  navbarContact: string;
  navbarHomeURL: string;
  navbarGrillsURL: string;
  navbarAboutURL: string;
  navbarContactURL: string;

  johnTagline: string;
  johnPrice: string;
  johnSubheading: string;
  johnParagraph1: string;
  johnParagraph1short: string;
  johnParagraph2: string;
  johnUSP1: string;
  johnUSP1Text: string;
  johnUSP2: string;
  johnUSP2Text: string;
  johnUSP3: string;
  johnUSP3Text: string;

  peterTagline: string;
  peterPrice: string;
  peterSubheading: string;
  peterParagraph1: string;
  peterParagraph1short: string;
  peterParagraph2: string;
  peterUSP1: string;
  peterUSP1Text: string;
  peterUSP2: string;
  peterUSP2Text: string;
  peterUSP3: string;
  peterUSP3Text: string;

  josephTagline: string;
  josephPrice: string;
  josephSubheading: string;
  josephParagraph1: string;
  josephParagraph1short: string;
  josephParagraph2: string;
  josephUSP1: string;
  josephUSP1Text: string;
  josephUSP2: string;
  josephUSP2Text: string;
  josephUSP3: string;
  josephUSP3Text: string;
  josephAccessoryGrate: string;
  josephAccessoryGratePrice: string;
  josephAccessoryCover: string;
  josephAccessoryCoverPrice: string;

  buttonEshop: string;
  buttonOurStory: string;
  buttonMoreInfo: string;
  buttonOurGrills: string;
  buttonTerms: string;
  buttonGDPR: string;
  buttonCertification: string;

  indexHeroTitle: string;
  indexSection1Text: string;
  indexGrillWeight: string;
  indexGrillHeight: string;
  indexGrillLength: string;

  grillsHeroTitle: string;

  productParametersHeading: string;
  productParameterDimensions: string;
  productParameterSizeDis: string;
  productParameterSizeAss: string;
  produtParameterHeight: string;
  produtParameterWidth: string;
  productParameterMaterial: string;
  productParameterStainlessSteel: string;
  productParameterStainlessSteelJoseph: string;
  productParameterBlackSteel: string;
  productParameterWeight: string;
  productParameterWeightOfAccessoryGrate: string;
  productParameterWeightOfAccessoryCover: string;
  productParameterSteelThickness: string;
  productParameterSteelPlateThickness: string;

  productGalleryInAction: string;

  aboutHeroTitle: string;
  aboutHeroSubtitle: string;
  aboutSection1Title: string;
  aboutSection1Text1: string;
  aboutSection1Text2: string;
  aboutSection2Title: string;
  aboutSection2Text1: string;
  aboutSection2Text2: string;
  aboutSection2Text3: string;

  contactHeroTitle: string;
  contactHeroSubtitle: string;

  exploreSectionSubheading: string;
  exploreSectionHeading: string;

  contactSectionHeading: string;
  contactSectionFormTitle: string;
  contactIframeTitle: string;
  contactIframeSrc: string;

  footerGrillsHeading: string;
  footerPagesHeading: string;
  footerAboutLink: string;
  footerEshopLink: string;
  footerContactHeading: string;
  footerMadeBy: string;

  linkTermsAndConditions: string;
  linkGDPR: string;
  linkCertification: string;

  linkEshopGeneral: string;
  linkEshopJohn: string;
  linkEshopPeter: string;
  linkEshopJoseph: string;
};

export interface PageProps {
  langPack: Translation;
}
