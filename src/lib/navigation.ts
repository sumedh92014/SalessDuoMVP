export type Role = 'admin' | 'brand' | 'reviewer';

export type NavItem = {
  label: string;
  href: string;
};

export const roleNav: Record<Role, NavItem[]> = {
  admin: [
    { label: 'Dashboard', href: '/admin/dashboard' },
    { label: 'Campaigns', href: '/admin/campaigns' },
    { label: 'Claims', href: '/admin/claims' },
    { label: 'Submissions', href: '/admin/submissions' },
    { label: 'Reviewers', href: '/admin/reviewers' },
    { label: 'Brands', href: '/admin/brands' },
    { label: 'Payments', href: '/admin/payments' },
    { label: 'Invites', href: '/admin/invites' },
    { label: 'Reports', href: '/admin/reports' },
    { label: 'Notifications', href: '/admin/notifications' },
    { label: 'Settings', href: '/admin/settings' },
  ],
  brand: [
    { label: 'Dashboard', href: '/brand/dashboard' },
    { label: 'Campaigns', href: '/brand/campaigns' },
    { label: 'Claims', href: '/brand/claims' },
    { label: 'Submissions', href: '/brand/submissions' },
    { label: 'Reports', href: '/brand/reports' },
    { label: 'Profile', href: '/brand/profile' },
  ],
  reviewer: [
    { label: 'Dashboard', href: '/reviewer/dashboard' },
    { label: 'Campaigns', href: '/reviewer/campaigns' },
    { label: 'Claims', href: '/reviewer/claims' },
    { label: 'Submissions', href: '/reviewer/submissions' },
    { label: 'Reimbursements', href: '/reviewer/reimbursements' },
    { label: 'Profile', href: '/reviewer/profile' },
  ],
};
