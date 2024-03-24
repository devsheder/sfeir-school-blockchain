import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

const FOLDERS = {
  OO: '00-start',
  O1: '01-concepts',
  O2: '02-data',
  O3: '03-bitcoin',
  O4: '04-end',
};


const start = () => [`${FOLDERS.OO}/a-welcome.md`, `${FOLDERS.OO}/b-speaker-ala.md`];
const concepts = () => [
  `${FOLDERS.O1}/a-concepts.md`,
  `${FOLDERS.O1}/b-networks.md`,
  `${FOLDERS.O1}/c-ledger.md`,
];
const data = () => [
  `${FOLDERS.O2}/a-chain-.md`,
  `${FOLDERS.O2}/b-consensus.md`,
];
const bitcoin = () => [
  `${FOLDERS.O3}/a-title.md`,
  `${FOLDERS.O3}/b-bitcoin.md`,
];

const end = () => [
  `${FOLDERS.O4}/a-end.md`,
];

function formation() {
  return [
    ...start(), //
    ...concepts(), //
    ...data(), //
    ...bitcoin(), //
    ...end(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
