<template>
  <div class="bg-teal-500">
    <v-container>
      <v-row>
        <v-col sm="3">
          <UiSelect :label="label" :items="items" :icon="icon" v-model:selected="aaa"></UiSelect>
        </v-col>
        <v-col sm="3">
          <UiSelect :label="label" :items="items" :icon="icon" v-model:selected="aaa"></UiSelect>
        </v-col>
        <v-col sm="3">
          <UiSelect :label="label" :items="items" :icon="icon" v-model:selected="aaa"></UiSelect>
        </v-col>
        <v-col sm="3">
          <UiSelect :label="label" :items="items" :icon="icon" v-model:selected="aaa"></UiSelect>
        </v-col>
      </v-row>
      <v-row>
        <UiSearchBar :handleClick="ccc" v-model:text="bbb"></UiSearchBar>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const label = "aa";
const items = ["a", "i", "u", "e", "o"];
const icon = "mdi-vuetify";

const aaa = ref<string | undefined>(undefined);
const bbb = ref<string | undefined>(undefined);

const ccc = function () {
  console.log("aaa");
  console.log(bbb);
};
</script>
