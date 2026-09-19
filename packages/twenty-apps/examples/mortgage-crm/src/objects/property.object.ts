import { defineObject, FieldType } from 'twenty-sdk/define';

export const PROPERTY_UNIVERSAL_IDENTIFIER =
  '9a4c1e10-0002-4a10-9d10-000000000010';

export const PROPERTY_NAME_FIELD_ID =
  '9a4c1e10-0002-4a10-9d10-000000000011';
export const PROPERTY_ADDRESS_FIELD_ID =
  '9a4c1e10-0002-4a10-9d10-000000000012';
export const PROPERTY_TYPE_FIELD_ID =
  '9a4c1e10-0002-4a10-9d10-000000000013';
export const PROPERTY_PURCHASE_PRICE_FIELD_ID =
  '9a4c1e10-0002-4a10-9d10-000000000014';
export const PROPERTY_YEAR_BUILT_FIELD_ID =
  '9a4c1e10-0002-4a10-9d10-000000000015';

export default defineObject({
  universalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  nameSingular: 'property',
  namePlural: 'properties',
  labelSingular: 'Property',
  labelPlural: 'Properties',
  description: 'A property being purchased or refinanced',
  icon: 'IconHome',
  labelIdentifierFieldMetadataUniversalIdentifier: PROPERTY_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: PROPERTY_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      description: 'Short label used to identify the property, e.g. its street address',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: PROPERTY_ADDRESS_FIELD_ID,
      type: FieldType.ADDRESS,
      name: 'address',
      label: 'Address',
      description: 'Full property address',
      icon: 'IconMapPin',
    },
    {
      universalIdentifier: PROPERTY_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: 'propertyType',
      label: 'Property Type',
      icon: 'IconBuildingEstate',
      defaultValue: "'SINGLE_FAMILY'",
      options: [
        { id: '9a4c1e10-0002-4a10-9d10-000000000021', value: 'SINGLE_FAMILY', label: 'Single Family', position: 0, color: 'blue' },
        { id: '9a4c1e10-0002-4a10-9d10-000000000022', value: 'CONDO', label: 'Condo', position: 1, color: 'purple' },
        { id: '9a4c1e10-0002-4a10-9d10-000000000023', value: 'TOWNHOME', label: 'Townhome', position: 2, color: 'sky' },
        { id: '9a4c1e10-0002-4a10-9d10-000000000024', value: 'MULTI_FAMILY', label: 'Multi-Family', position: 3, color: 'orange' },
        { id: '9a4c1e10-0002-4a10-9d10-000000000025', value: 'LAND', label: 'Land', position: 4, color: 'yellow' },
      ],
    },
    {
      universalIdentifier: PROPERTY_PURCHASE_PRICE_FIELD_ID,
      type: FieldType.CURRENCY,
      name: 'purchasePrice',
      label: 'Purchase Price',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: PROPERTY_YEAR_BUILT_FIELD_ID,
      type: FieldType.NUMBER,
      name: 'yearBuilt',
      label: 'Year Built',
      icon: 'IconCalendarStats',
      isNullable: true,
    },
  ],
});
