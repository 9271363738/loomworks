import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  
  {
    id: 2,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/admin/dashboard',
  },
  {
    id: 8,
    label: 'Orders',
    icon: 'ri-apps-2-line',
    link: '/admin/orders',
  },

  {
    id: 55,
    label: 'Users',
    icon: 'ri-account-circle-line',
    link: '/admin/usermaster',
  },
  {
    id: 55,
    label: 'Items',
    icon: 'bx bx-shopping-bag fs-22',
    link: '/admin/itemmaster',
  },
]