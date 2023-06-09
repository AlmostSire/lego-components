<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @:click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts" setup>
import {
  TextComponentProps,
  textDefaultProps,
  textStylePropNames,
} from "@/defaultProps";
import useComponentCommon from "@/hooks/useComponentCommon";

const props = withDefaults(
  defineProps<Partial<TextComponentProps & { tag: string }>>(),
  {
    ...textDefaultProps,
    tag: "div",
  }
);

const { styleProps, handleClick } = useComponentCommon(
  props,
  textStylePropNames
);
</script>

<style>
.l-text-component {
  position: relative !important;
}
</style>
