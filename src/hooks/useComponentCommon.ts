import { computed } from "vue";
import { pick } from "lodash-es";
import type { CommonComponentProps } from "@/defaultProps";

const useComponentCommon = <
  T extends Partial<CommonComponentProps & { isEditing: boolean }>
>(
  props: T,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks));

  const handleClick = () => {
    if (props.actionType === "url" && props.url && !props.isEditing) {
      window.location.href = props.url;
    }
  };

  return {
    styleProps,
    handleClick,
  };
};

export default useComponentCommon;
