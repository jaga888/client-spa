<template>
  <div id="announcements" class="card bg-primary text-white mb-3">
    <div class="card-header">
      Announcements
    </div>

    <table class="table table-borderless">
      <tbody>
      <tr><td colspan="2">
        <h3>title</h3>
        Content...
        <p class="mb-0">
          <a class="text-warning" href="#">
            more
          </a>
        </p>
      </td></tr>
      <tr><td colspan="2"><h4 class="mb-0">Previous Announcements</h4></td></tr>
      <tr>
        <td>
          <span style="color:red">&#x25cf;</span>
          <a class="text-warning" href="#">
            Title2
          </a>
        </td>
        <td class="text-nowrap">
          Jan 3, 2024
        </td>
      </tr>
      <tr>
        <td>
          <a class="text-warning" href="#">
            Title3
          </a>
        </td>
        <td class="text-nowrap">
          Jan 3, 2024
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup lang="ts">
</script>

<style>
#announcements table tbody tr td {
  color: #fff;
  background-color: rgb(16, 136, 203);
  text-align: left;
  font-weight: normal;
}

#announcements a {
  color: #ffc107;
}
#announcements table {
  color: #fff;
}


</style>
