import { defineObject, FieldType } from 'twenty-sdk/define';

export const REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER =
  '9a4c1e10-0003-4a10-9d10-000000000010';

export const REFERRAL_PARTNER_NAME_FIELD_ID =
  '9a4c1e10-0003-4a10-9d10-000000000011';
export const REFERRAL_PARTNER_TYPE_FIELD_ID =
  '9a4c1e10-0003-4a10-9d10-000000000012';
export const REFERRAL_PARTNER_EMAIL_FIELD_ID =
  '9a4c1e10-0003-4a10-9d10-000000000013';
export const REFERRAL_PARTNER_PHONE_FIELD_ID =
  '9a4c1e10-0003-4a10-9d10-000000000014';
export const REFERRAL_PARTNER_COMPANY_NAME_FIELD_ID =
  '9a4c1e10-0003-4a10-9d10-000000000015';

export default defineObject({
  universalIdentifier: REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
  nameSingular: 'referralPartner',
  namePlural: 'referralPartners',
  labelSingular: 'Referral Partner',
  labelPlural: 'Referral Partners',
  description: 'A realtor or other external partner who refers borrowers',
  icon: 'IconUserStar',
  labelIdentifierFieldMetadataUniversalIdentifier:
    REFERRAL_PARTNER_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: REFERRAL_PARTNER_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: REFERRAL_PARTNER_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: 'partnerType',
      label: 'Partner Type',
      icon: 'IconUsers',
      defaultValue: "'REALTOR'",
      options: [
        { id: '9a4c1e10-0003-4a10-9d10-000000000021', value: 'REALTOR', label: 'Realtor', position: 0, color: 'green' },
        { id: '9a4c1e10-0003-4a10-9d10-000000000022', value: 'ATTORNEY', label: 'Attorney', position: 1, color: 'blue' },
        { id: '9a4c1e10-0003-4a10-9d10-000000000023', value: 'FINANCIAL_ADVISOR', label: 'Financial Advisor', position: 2, color: 'purple' },
        { id: '9a4c1e10-0003-4a10-9d10-000000000024', value: 'OTHER', label: 'Other', position: 3, color: 'gray' },
      ],
    },
    {
      universalIdentifier: REFERRAL_PARTNER_EMAIL_FIELD_ID,
      type: FieldType.EMAILS,
      name: 'emails',
      label: 'Emails',
      icon: 'IconMail',
      isNullable: true,
    },
    {
      universalIdentifier: REFERRAL_PARTNER_PHONE_FIELD_ID,
      type: FieldType.PHONES,
      name: 'phones',
      label: 'Phones',
      icon: 'IconPhone',
      isNullable: true,
    },
    {
      universalIdentifier: REFERRAL_PARTNER_COMPANY_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'companyName',
      label: 'Company Name',
      description: 'Brokerage or firm the partner belongs to',
      icon: 'IconBuildingSkyscraper',
      isNullable: true,
    },
  ],
});
