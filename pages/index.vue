<!-- ./pages/index.vue -->
<script setup lang="ts">
import { computedAsync } from "@vueuse/core";
import QRCode from "qrcode";

const { $pwa } = useNuxtApp();

onMounted(() => {
  if ($pwa.offlineReady) {
    console.log("App ready to work offline");
  }
});

const text = ref("https://vueuse.org");

const qrSVG = computedAsync(
  async () => {
    return QRCode.toString(text.value, { type: "svg" });
  },
  null // initial state
);

let value;
QRCode.toString(text.value, { type: "svg" })
  .then((url) => {
    /// console.log(url);
    value = url;
  })
  .catch((err) => {
    console.error(err);
  });
</script>

<style>
.qr {
  width: 100%;
}
</style>

<template>
  <section class="site-section">
    <div class="wrapper">
      <div>Text content for QRCode</div>
      <input v-model="text" type="text" />

      <div v-html="qrSVG"></div>
    </div>
  </section>
</template>
