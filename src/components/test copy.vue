<template>
    <section id="tabs">
      <div class="container relative mx-auto my-6 mb-16 mt-12 px-6">
        <div class="bg-tabs"></div>
        <div class="flex justify-center max-w-xl mx-auto mb-6 border-b">
          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-1 flex-grow tab"
            :class="{
              'border-indigo-700 border-b-1 active': isActive('panel-1'),
            }"
            @click="setActivePanel('panel-1')"
          >
            <div class="py-5">Web Apps</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-1 flex-grow tab"
            :class="{
              'border-indigo-700 border-b-1 active': isActive('panel-2'),
            }"
            @click="setActivePanel('panel-2')"
          >
            <div class="py-5">Desktop</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b- flex-grow tab"
            :class="{
              'border-indigo-700 border-b-1 active': isActive('panel-3'),
            }"
            @click="setActivePanel('panel-3')"
          >
            <div class="py-5">Mobile</div>
          </div>
        </div>
        <!-- Tab Panels -->
        <div id="panels" class="container mx-auto">
          <!-- Panel 1 -->
          <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel"
            v-show="isActive('panel-1')"
          >
            <div class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <h3
                class="mt-32 text-3xl font-bold text-center md:mt-0 md:text-center text-gray-500"
              >
                Web Apps
              </h3>
              <div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                    class="mx-auto mt-10 mb-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8"
                  >
                    <!-- Icon 1 -->
                    <div class="tooltip">
<!-- <image></image> -->
                      <span class="tooltiptext">VueJS</span>
                    </div>
              </div>
            </div>
          </div>
          </div>
          </div>

          <!-- Panel 2 -->
          <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel"
            v-show="isActive('panel-2')"
          >
            <!-- Panel Content -->
            <div class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <h3
                class="mt-14 text-3xl font-bold text-center md:mt-0 md:text-center text-gray-500"
              >
                Desktop
              </h3>

              <div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                    class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8"
                  >
                    <!-- Icon 1 -->
                    <div class="tooltip">
<!-- <image></image> --> -->
                      <span class="tooltiptext">Firebase</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Panel 3 -->
          <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel"
            v-show="isActive('panel-3')"
          >
            <!-- Panel Content -->
            <div class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <h3
                class="mt-14 text-3xl font-bold text-center md:mt-0 md:text-center text-gray-500"
              >
                Mobile
              </h3>
              <!-- Mobile -->
              <div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                    class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8"
                  >

                    <div class="tooltip">
                      <!-- <image></image> -->
                      <span class="tooltiptext">Jira</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const activePanel = ref('panel-1');

    function setActivePanel(panel: string) {
      activePanel.value = panel;
    }

    function isActive(panel: string) {
      return activePanel.value === panel;
    }

    return {
      activePanel,
      setActivePanel,
      isActive,
    };
  },
};
</script>

<style scoped>
.tab.active {
  color: #7d49e4;
  font-weight: bold;
}
svg {
  height: 64px;
  width: 64px;
}

</style>
