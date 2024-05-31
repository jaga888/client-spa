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

    <div class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#" id="processingDropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false"
          >
            Processing
          </a>
          <div class="border-0 bg-primary dropdown-menu" aria-labelledby="procesingDropdown">
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-bullhorn"></i>
              Notices of Non-Compliance
            </a>
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-inbox"></i>
              Unlawful Detainers
            </a>
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-gavel"></i>
              Court Dockets
            </a>
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-truck"></i>
              Writs of Eviction
            </a>
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-check"></i>
              Notices of Satisfaction
            </a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="reportingDropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false"
          >
            Reporting
          </a>
          <div class="border-0 bg-primary dropdown-menu" aria-labelledby="reportingDropdown">
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-list"></i>
              Judgment & Possession Report
            </a>
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-list"></i>
              Rent with Reservation Report
            </a>
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-list"></i>
              Unsatisfied Judgments Report
            </a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="administrationDropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false"
          >
            Administration
          </a>
          <div class="border-0 bg-primary dropdown-menu" aria-labelledby="administrationDropdown">
            <a class="text-white dropdown-item" href="#">
              <i class="text-white-25 fas mr-2 fa-users"></i>
              User Accounts
            </a>
          </div>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="announcementdropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false"
          >
            <i class="fas fa-bullhorn"></i>
          </a>
          <div class="border-0 bg-primary dropdown-menu dropdown-menu-right" aria-labelledby="announcementdropdown">
            <a class="text-white dropdown-item" href="#">
              <span style="color:red">&#x25cf;</span>
              Announcement unread
            </a>
            <a class="text-white dropdown-item" href="#">
              Announcement read
            </a>
          </div>
        </li>
        <li class="nav-item dropdown active" @click="toggleDropdown">
          <a class="nav-link dropdown-toggle active"
             href="#" id="accountDropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false"
          >
            {{ user.first_name }} {{ user.last_name }}
          </a>
          <div
              :class="{'border-0 bg-primary dropdown-menu dropdown-menu-right': true, 'show': isDropdownActive}"
              aria-labelledby="
              accountDropdown
          ">
            <a class="text-white dropdown-item"
               id="account-settings" href="#">
              <i class="text-white-25 fas mr-2 fa-key"></i>
              Change Password
            </a>
            <a class="text-white senex-menu-update-signature dropdown-item"
               href="#">
              <i class="text-white-25 fas mr-2 fa-pencil"></i>
              Update Signature
            </a>
            <a class="text-white dropdown-item" href="" @click="logout">
              <i class="text-white-25 fas mr-2 fa-coffee"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type {UserProfile} from "~/services/user/profile";

const {data, signOut} = useAuth();

const isDropdownActive = ref(false);

const user = ref<UserProfile>({
  first_name: data.value?.first_name || '',
  last_name: data.value?.last_name || '',
});
const toggleDropdown = () => {
  isDropdownActive.value = !isDropdownActive.value;
};

const logout = async () => {
  await signOut();
};
</script>
