export type CampaignStatus = 'Live' | 'Under Admin Review' | 'Paid' | 'Draft' | 'Paused' | 'Completed' | 'Cancelled';

export const adminStats = {
  dashboard: [
    { label: 'Total Campaigns', value: '24', tone: 'bg-blue-100 text-blue-700' },
    { label: 'Live Campaigns', value: '8', tone: 'bg-green-100 text-green-700' },
    { label: 'Total Reviewers', value: '186', tone: 'bg-violet-100 text-violet-700' },
    { label: 'Claims Submitted', value: '312', tone: 'bg-amber-100 text-amber-700' },
    { label: 'Total Reimbursed', value: '$12,450', tone: 'bg-emerald-100 text-emerald-700' },
  ],
};

export const adminCampaigns = [
  { id: 'CAM-2405-001', product: 'GlowRevive Face Cream', brand: 'GlowRevive', status: 'Live', slots: '14 / 20', reimbursement: '$25.00', createdOn: 'May 20, 2024' },
  { id: 'CAM-2405-002', product: 'SmartBuild Puzzle Toy', brand: 'PlayWell', status: 'Under Admin Review', slots: '0 / 20', reimbursement: '$22.00', createdOn: 'May 21, 2024' },
  { id: 'CAM-2405-003', product: 'ChefMaster Non-Stick Pan', brand: 'HomeChef', status: 'Paid', slots: '0 / 20', reimbursement: '$28.00', createdOn: 'May 19, 2024' },
  { id: 'CAM-2405-004', product: 'PawCare Omega Drops', brand: 'PawCare', status: 'Draft', slots: '0 / 20', reimbursement: '$18.00', createdOn: 'May 18, 2024' },
  { id: 'CAM-2405-005', product: 'LuxeMatte Lipstick', brand: 'LuxeBeauty', status: 'Paused', slots: '6 / 20', reimbursement: '$20.00', createdOn: 'May 16, 2024' },
] as const;

export const adminClaims = [
  { id: 'CLM-3121', reviewer: 'Sarah Johnson', campaign: 'GlowRevive Face Cream', orderId: '113-4587321-1234567', status: 'Submitted', reimbursement: '$25.00' },
  { id: 'CLM-3118', reviewer: 'Michael Scott', campaign: 'SmartBuild Puzzle Toy', orderId: '114-9876542-7654321', status: 'Under Review', reimbursement: '$22.00' },
  { id: 'CLM-3112', reviewer: 'Pam Beesly', campaign: 'ChefMaster Non-Stick Pan', orderId: '113-2223334-4445556', status: 'Approved', reimbursement: '$28.00' },
  { id: 'CLM-3099', reviewer: 'Jim Halpert', campaign: 'PawCare Omega Drops', orderId: '114-3334445-5556667', status: 'Rejected', reimbursement: '$18.00' },
] as const;

export const adminReviewers = [
  { id: 'RVW-1001', name: 'Sarah Johnson', categories: 'Beauty & Skincare, Toys', reliability: 'Priority', location: 'Los Angeles, CA', status: 'Active' },
  { id: 'RVW-1002', name: 'Michael Scott', categories: 'Home & Kitchen, Pet Essentials', reliability: 'Great', location: 'Chicago, IL', status: 'Active' },
  { id: 'RVW-1003', name: 'Pam Beesly', categories: 'Beauty & Skincare', reliability: 'Great', location: 'Dallas, TX', status: 'Invited' },
  { id: 'RVW-1004', name: 'Robert Wallace', categories: 'Toys', reliability: 'Blocked', location: 'Tampa, FL', status: 'Blocked' },
] as const;

export const adminBrands = [
  { id: 'BRD-2001', name: 'GlowRevive', focus: 'Beauty & Skincare', campaigns: 3, spent: '$1,245.00', status: 'Active', joinedOn: 'May 18, 2024' },
  { id: 'BRD-2002', name: 'PlayWell', focus: 'Toys', campaigns: 2, spent: '$620.00', status: 'Active', joinedOn: 'May 17, 2024' },
  { id: 'BRD-2003', name: 'HomeChef', focus: 'Home & Kitchen', campaigns: 2, spent: '$560.00', status: 'Paused', joinedOn: 'May 16, 2024' },
  { id: 'BRD-2004', name: 'PetFriends', focus: 'Pet Essentials', campaigns: 0, spent: '$0.00', status: 'Blocked', joinedOn: 'May 12, 2024' },
] as const;
