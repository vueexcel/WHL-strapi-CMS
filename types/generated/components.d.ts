import type { Schema, Struct } from '@strapi/strapi';

export interface CaseStudySectionCaseSections extends Struct.ComponentSchema {
  collectionName: 'components_case_study_section_case_sections';
  info: {
    displayName: 'case-sections';
  };
  attributes: {};
}

export interface CaseStudySectionSections extends Struct.ComponentSchema {
  collectionName: 'components_case_study_section_sections';
  info: {
    description: '';
    displayName: 'sections';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    images1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CompanyLogosCompanies extends Struct.ComponentSchema {
  collectionName: 'components_company_logos_companies';
  info: {
    displayName: 'companies';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'case-study-section.case-sections': CaseStudySectionCaseSections;
      'case-study-section.sections': CaseStudySectionSections;
      'company-logos.companies': CompanyLogosCompanies;
    }
  }
}
