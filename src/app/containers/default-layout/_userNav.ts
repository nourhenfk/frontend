import { INavData } from '@coreui/angular';

export const navItemsUser: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
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
    name: 'Employees',
    url: '/employees',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Create Employee',
        url: 'manager/createEmployee'
      },

      {
        name: 'List employees',
        url: 'manager/employees'
      }
    ]},
  {
    name: 'Missions',
    url: '/missions',
    iconComponent: { name: 'cil-calculator' },
    children: [
      {
        name: 'Create Mission',
        url: 'manager/createMission'
      },

      {
        name: 'List Missions',
        url: 'manager/missions'
      }
    ]},
    {
      name: 'Announcements',
      url: '/announcements',
      iconComponent: { name: 'cil-bell' },
      children: [
        {
          name: 'Create announcement',
          url: 'manager/createAnnouncement'
        },

        {
          name: 'List Announcements',
          url: 'manager/announcements'
        }
      ]},
    {
      name: 'Formateurs Externes',
      url: '/formateurs',
      iconComponent: { name: 'cil-star' },
      children: [
        {
          name: 'Create Formateur',
          url: 'manager/createFormateur'
        },

        {
          name: 'List Formateurs-EX',
          url: 'manager/formateurs'
        }
      ]},
      {
        name: 'Formations',
        url: '/formateurs',
        iconComponent: { name: 'cil-star' },
        children: [
          {
            name: 'Create Formation',
            url: 'manager/createFormation'
          },

          {
            name: 'List Formations',
            url: 'manager/formations'
          }
        ]},
      {
        name: 'Pointage',
        url: 'manager/pointage',
        linkProps: { fragment: 'someAnchor' },
        iconComponent: { name: 'cil-pencil' }
      },


];
