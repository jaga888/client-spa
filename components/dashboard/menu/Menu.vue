<template>
  <nav id="menu" class="navbar navbar-expand-md navbar-dark bg-primary">
    <a class="navbar-brand" href="/public">
      <img src="/media/images/senex.svg" alt="senex" height="28" width="28">
    </a>
    <button class="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <MenuItemComponent
            v-for="menuItem in menuItemsLeft"
            :menuItem="menuItem"
            :openedMenuId="openedMenuId"
            @click="toggleDropdown(menuItem.id)"
        />
      </ul>
      <ul class="navbar-nav">
        <MenuItemComponent
            v-for="menuItem in menuItemsRight"
            :menuItem="menuItem"
            :openedMenuId="openedMenuId"
            @click="toggleDropdown(menuItem.id)"
            v-on-click-outside="closeMenu"
        />
      </ul>
    </div>
  </nav>
  <Modal/>
</template>

<script setup lang="ts">
import type {MenuItemType} from "~/services/menu/types";
import MenuItemComponent from "~/components/dashboard/menu/MenuItemComponent.vue";
import type {UserProfile} from "~/services/user/types";
import {vOnClickOutside} from '@vueuse/components';
import {useMenuStore} from "~/store/menu";
import type {Announcement} from "~/services/user/types";
import {ref} from "vue";

const openedMenuId = ref<number>(0);
const isNavbarOpen = ref(false);
const isModalOpen = ref(false);

const toggleDropdown = (menuId: number = 0) => {
  openedMenuId.value = openedMenuId.value === menuId ? 0 : menuId;
};

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

function closeMenu() {
  openedMenuId.value = 0;
}

function closeModal() {
  isModalOpen.value = false;
}

const announcements = ref<Announcement[]>([]);
const {data} = useAuth();

onMounted(async () => {
  try {
    const response = await fetch('/api/announcements');
    const data = await response.json();
    data.sort((a: Announcement, b: Announcement) => new Date(b.createdAt.date).getTime() - new Date(a.createdAt.date).getTime());
    announcements.value = data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
});

const user = ref<UserProfile>({
  first_name: data.value?.first_name || '',
  last_name: data.value?.last_name || '',
  roles: data.value?.roles || []
});

const {setStatusModal} = useMenuStore();

const menuItemsLeft: MenuItemType[] = [
  {
    'id': 1,
    'name': 'Processing',
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Notices of Non-Compliance',
        'href': '',
        'icon': 'Bullhorn',
      },
      {
        'name': 'Unlawful Detainers',
        'href': '',
        'icon': 'Inbox'
      },
      {
        'name': 'Court Dockets',
        'href': '',
        'icon': 'Gavel'
      },
      {
        'name': 'Writs of Eviction',
        'href': '',
        'icon': 'Truck'
      },
      {
        'name': 'Notices of Satisfaction',
        'href': '',
        'icon': 'Check'
      },
    ],
  },
  {
    'id': 3,
    'name': 'Accounting',
    'show': false,
    'permissions': ['firm-manager'],
    'children': [
      {
        'name': 'New Client Billing',
        'href': '',
        'icon': 'List'
      },
      {
        'name': 'Daily Costs Report',
        'href': '',
        'icon': 'List'
      },
      {
        'name': 'Military Legal Representation Report',
        'href': '',
        'icon': 'List'
      },
      {
        'name': 'Marston Service Costs Report',
        'href': '',
        'icon': 'List'
      },
      {
        'name': 'Clio Report',
        'href': '',
        'icon': 'List'
      },
    ],
  },
  {
    'id': 2,
    'name': 'Reporting',
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Judgment & Possession Report',
        'href': '',
        'icon': 'List'
      },
      {
        'name': 'Rent with Reservation Report',
        'href': '',
        'icon': 'List'
      },
      {
        'name': 'Unsatisfied Judgments Report',
        'href': '',
        'icon': 'List'
      },
    ],
  },
  {
    'id': 4,
    'name': 'Administration',
    'show': false,
    'permissions': ['client-admin'],
    'children': [
      {
        'name': 'Users',
        'href': '/admin/user/list',
        'icon': 'Users'
      },
    ],
  },
  {
    'id': 5,
    'name': 'Management',
    'show': false,
    'permissions': ['firm-manager','super-admin'],
    'children': [
      {
        'name': 'Companies',
        'href': '/admin/company/list',
        'icon': 'List'
      },
      {
        'name': 'Properties',
        'href': '/admin/property/list',
        'icon': 'Check'
      },
      {
        'name': 'Users',
        'href': '/admin/user/list',
        'icon': 'Users'
      },
    ],
  },

];

const menuItemsRight: MenuItemType[] = [
  {
    'id': 5,
    'prefix': '<span style="color:red">●</span>',
    'icon': 'Bullhorn',
    'name': '',
    'show': false,
    'permissions': [],
    'children': announcements.value.map(announcement => ({
      name: announcement.title,
      href: `/announcement/${announcement.id}`,
      unread: announcement.unread
    })),
  },
  {
    'id': 6,
    'name': user.value.first_name + ' ' + user.value.last_name,
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Change Password',
        'href': '',
        'icon': 'Key',
        'click': () => setStatusModal(true),
      },
      {
        'name': 'Update Signature',
        'href': '',
        'icon': 'Pencil',
        'class': 'senex-menu-update-signature'
      },
      {
        'name': 'Logout',
        'href': '',
        'icon': 'Coffee'
      },
    ],
  },
];

function adjustDropdownPosition(dropdown) {
  const rect = dropdown.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  if (rect.right > viewportWidth) {
    dropdown.style.left = "auto";
    dropdown.style.right = "0";
  }
}

document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', function () {
    adjustDropdownPosition(this);
  });
});
</script>

<style scoped lang="scss">
.nav-item {
  font-size: 15px !important;
  font-weight: 550 !important;
}

.navbar {
  padding: 8px 16px;
  height: 56px;
}

.navbar-nav {
  flex-wrap: nowrap;
}

@media (max-width: 767.98px) {
  .navbar-nav {
    flex-direction: column;
  }
}
</style>