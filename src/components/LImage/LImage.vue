<template>
  <component
    :is="'img'"
    :style="styleProps"
    class="l-image-component"
    :src="src"
    @click.prevent="handleClick"
  />
</template>
<script lang="ts" setup>
import useComponentCommon from "@/hooks/useComponentCommon";
import {
  imageDefaultProps,
  imageStylePropsNames,
  ImageComponentProps,
} from "@/defaultProps";

const props = withDefaults(defineProps<Partial<ImageComponentProps>>(), {
  ...imageDefaultProps,
});

const { styleProps, handleClick } = useComponentCommon(
  props,
  imageStylePropsNames
);
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
