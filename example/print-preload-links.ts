import { auditNetworkRequest, filterByScript, generatePreloadLinks } from '../src/index';

const url = process.argv[2];

if (url === undefined) {
  console.error('URL not passed');
  console.error('preload-link-generator <URL>');
  process.exit(1);
}

(async () => {
  const networkRecords = await auditNetworkRequest(url);
  const filteredNetworkRecords = networkRecords.filter(filterByScript);
  const html = generatePreloadLinks({ networkRecords: filteredNetworkRecords });
  console.log(html);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});