// icons
import {
  QuestionOutlined,
  DashboardOutlined,
  ChromeOutlined,
  LoginOutlined,
  ProfileOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  CrownOutlined,
  ProjectOutlined,
  DotChartOutlined,
  ContactsOutlined
} from '@ant-design/icons-vue';
import { NoteIcon } from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Navigation' },
  {
    title: 'Dashboard',
    icon: DashboardOutlined,
    to: '/dashboard'
  },
  {
    title: 'Contacts',
    icon: ContactsOutlined,
    to: '/contacts'
  },
  {
    title: 'Projects',
    icon: ProjectOutlined,
    to: '/projects'
  },
  {
    title: 'Proposals',
    icon: ProjectOutlined,
    to: '/proposals'
  },
  {
    title: 'Invoices',
    icon: ProjectOutlined, 
    to: '/invoices'
  },
  {
    title: 'Inventory',
    icon: ProjectOutlined, 
    to: '/inventory'
  },
  {
    title: 'Notes',
    icon: BarcodeOutlined, 
    to: '/notes'
  },
  {
    title: 'Uploads',
    icon: ProjectOutlined, 
    to: '/uploads'
  },
  {
    title: 'Support',
    icon: ProfileOutlined, 
    to: '/support'
  },

  // { header: 'Authentication' },
  // {
  //   title: 'Login',
  //   icon: LoginOutlined,
  //   to: '/auth/login'
  // },
  // {
  //   title: 'Register',
  //   icon: ProfileOutlined,
  //   to: '/auth/register'
  // },
  // { header: 'Utilities' },
  // {
  //   title: 'Typography',
  //   icon: FontSizeOutlined,
  //   to: '/typography'
  // },
  // {
  //   title: 'Color',
  //   icon: BgColorsOutlined,
  //   to: '/colors'
  // },
  // {
  //   title: 'Shadow',
  //   icon: BarcodeOutlined,
  //   to: '/shadow'
  // },
  // {
  //   title: 'Ant Icons',
  //   icon: CrownOutlined,
  //   to: '/icon/ant'
  // },
  // { header: 'Support' },
  // {
  //   title: 'Support',
  //   icon: ChromeOutlined,
  //   to: '/sample-page'
  // },
  // {
  //   title: 'Documentation',
  //   icon: QuestionOutlined,
  //   to: 'https://codedthemes.gitbook.io/mantis-vuetify/',
  //   type: 'external',
  //   chip: 'gitbook',
  //   chipColor: 'secondary',
  //   chipVariant: 'flat'
  // }
];

export default sidebarItem;
