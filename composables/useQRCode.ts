import type { MaybeRefOrGetter } from "@vueuse/shared";
import { isClient, toRef } from "@vueuse/shared";
import QRCode from "qrcode";
import { ref, watch } from "vue-demi";

/**
 * Wrapper for qrcode.
 *
 * @see https://vueuse.org/useQRCode
 * @param text
 * @param options
 */
export function useQRCode(
  text: MaybeRefOrGetter<string>,
  options?: QRCode.QRCodeToDataURLOptions
) {
  const src = toRef(text);
  const result = ref("");

  watch(
    src,
    async (value) => {
      if (src.value && isClient)
        result.value = await QRCode.toString(value, options);
    },
    { immediate: true }
  );

  return result;
}
