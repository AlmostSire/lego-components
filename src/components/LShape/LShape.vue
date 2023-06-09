<template>
  <component
    :is="'div'"
    :style="styleProps"
    class="l-shape-component"
    @click.prevent="handleClick"
  />
</template>
<script lang="ts" setup>
import useComponentCommon from "@/hooks/useComponentCommon";
import {
  ShapeComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
} from "@/defaultProps";

const props = withDefaults(
  defineProps<ShapeComponentProps>(),
  shapeDefaultProps
);

const { styleProps, handleClick } = useComponentCommon(
  props,
  shapeStylePropsNames
);
</script>
