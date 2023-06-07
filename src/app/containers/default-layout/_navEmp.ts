import { INavData } from '@coreui/angular';

export const navEmployee: INavData[] = [
  {
    name: 'Dashboard',
    url: 'employee/home',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Home',
    url: 'employee/home',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'How was your day',
        url: 'employee/home'
      },

    ]},
    {
      name: 'Pointage',
      url: 'employee/pointage',
      linkProps: { fragment: 'someAnchor' },
      iconComponent: { name: 'cil-pencil' }
    },
    {
      name: 'SUIVI',
      url: '/formateurs',
      iconComponent: { name: 'cil-star' },
      children: [
        {
          name: 'Missions',
          url: 'employee/missions'
        },

        {
          name: 'Formations',
          url: 'manager/formations'
        },

        {
          name: 'Announcements',
          url: 'manager/announcements'
        }

      ]},





]
