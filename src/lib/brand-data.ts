export const brandStats = [
  { label: 'Total Campaigns', value: '6', tone: 'bg-blue-100 text-blue-700' },
  { label: 'Live Campaigns', value: '2', tone: 'bg-green-100 text-green-700' },
  { label: 'Pending Claims', value: '18', tone: 'bg-amber-100 text-amber-700' },
  { label: 'Total Spend', value: '$3,240', tone: 'bg-violet-100 text-violet-700' },
];

export const brandCampaigns = [
  { id: 'CAM-2405-001', product: 'GlowRevive Face Cream', status: 'Live', reviewers: 20, filled: 14, spend: '$1,245' },
  { id: 'CAM-2405-002', product: 'Night Repair Serum', status: 'Under Admin Review', reviewers: 15, filled: 0, spend: '$690' },
  { id: 'CAM-2405-003', product: 'Lip Balm Kit', status: 'Draft', reviewers: 12, filled: 0, spend: '$0' },
];

export const brandClaims = [
  { id: 'CLM-1001', reviewer: 'Sarah Johnson', status: 'Purchase Proof Submitted', orderId: '113-1234', amount: '$25' },
  { id: 'CLM-1002', reviewer: 'Pam Beesly', status: 'Approved', orderId: '113-8888', amount: '$22' },
];

export const brandSubmissions = [
  { id: 'SUB-9001', reviewer: 'Sarah Johnson', status: 'Submitted', assets: '3 photos' },
  { id: 'SUB-9002', reviewer: 'Pam Beesly', status: 'Returned for Resubmission', assets: '1 video + 2 photos' },
];
