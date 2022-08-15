export const trams = [
  {
    name: '121NAB',
    key: 'MTIxTmFC',
  },
  {
    name: '122NAB-10',
    key: 'MTIyTmFCLTEw',
  },
  {
    name: '121NBT',
    key: 'MTIxTmJU',
  },
  {
    name: '122NBT',
    key: 'MTIyTmJU',
  },
  {
    name: '122NBT-10',
    key: 'MTIyTmJULTEw',
  },
  {
    name: '122NBT DUO',
    key: 'MTIyTmJUX0RVTw==',
  },
  {
    name: '122NAL',
    key: 'MTIyTmFM',
  },
  {
    name: '122NAL-10',
    key: 'MTIyTmFMLTEw',
  },

  {
    name: '128NG-10',
    key: 'MTI4TkctMTA=',
  },
  {
    name: '2015N',
    key: 'MjAxNU4=',
  },
];

export const getUrl = (
  key,
  hash
) => `https://diagapp.pesa.pl:6324/get_rank/${key}/a00c49b5b0f98ca73b7c705b0f9aa3aebb0c65488de6fe99093cb2f9e3eb9944/${hash}
`;
