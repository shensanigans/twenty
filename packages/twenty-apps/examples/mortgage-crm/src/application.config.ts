import { defineApplication } from 'twenty-sdk/define';

export const APPLICATION_UNIVERSAL_IDENTIFIER =
  '9a4c1e10-0001-4a10-9d10-000000000001';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'Mortgage CRM',
  description:
    'Mortgage lending layer on top of Twenty: loans, properties and referral partners, with a full origination pipeline.',
});
