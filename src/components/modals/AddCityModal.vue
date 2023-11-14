<template>
  <div>
    <img
      class="modal-image"
      alt="Add new city modal image"
      src="@/assets/images/add-city-modal.jpg"
    />
    <h4 class="modal-title">Add new city</h4>
    <input
      type="text"
      class="modal-text-input"
      placeholder="Search for a city or state"
      @input="$emit('inputChange', ($event.target as HTMLInputElement).value)"
    />
    <ul v-if="searchCitiesList" class="autocomplete-input">
      <p style="margin: 0" v-if="searchCitiesError">
        Something went wrong, please try again later
      </p>
      <p style="margin: 0" v-if="searchCitiesList.length === 0">
        No results found
      </p>
      <template v-else>
        <li
          v-for="cityData in searchCitiesList"
          :key="cityData.id"
          style="padding: 8px 0; cursor: pointer"
          @click="redirectToCityView(cityData)"
        >
          {{ cityData.place_name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { CityData } from "../../interface";

interface Props {
  searchCitiesList?: CityData[];
  searchCitiesError: boolean;
}

defineEmits(["inputChange"]);
defineProps<Props>();

const router = useRouter();

const redirectToCityView = (cityData: CityData) => {
  const [city, state] = cityData.place_name.split(",");

  router.push({
    name: "cityView",
    params: { city, state: state.replaceAll(" ", "") },
    query: {
      lng: cityData.geometry.coordinates[0],
      lat: cityData.geometry.coordinates[1],
    },
  });
};
</script>

<style lang="scss" scoped>
.modal {
  &-image {
    border-radius: 8px;
    height: 250px;
    width: 100%;
  }

  &-title {
    color: rgb(2, 1, 1);
    margin: 16px 0;
  }

  &-text-input {
    width: 100%;
  }
}
</style>
