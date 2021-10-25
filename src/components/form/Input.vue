<template>
  <div class="input-group">
    <div class="errors">
      <div
          class="error"
          v-for="(error, i) in errors"
          :key="i"
      >
        <transition name="fade">
          <span v-if="error.hasError" v-html="error.message"/>
        </transition>
      </div>
    </div>
    <input
        :type="type"
        :id="label"
        :class="{filled: value.length}"
        @input="$emit('input', $event.target.value)"
    >
    <div class="label-wrapper">
      <slot></slot>
      <label :for="label" v-html="label"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    value: {
      type: String,
      default: () => ''
    },
    errors: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input-group {
  width: 100%;
  position: relative;
  .errors {
    position: absolute;
    bottom: calc(100% + 8px);
    .error {
      span {
        font-size: 12px;
        color: red;
      }
    }
  }
  input {
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    padding: 12px 12px 12px 52px;

    &:focus, &.filled {
      ~ .label-wrapper {
        label {
          opacity: 0;
        }
      }
    }
  }

  .label-wrapper {
    top: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    left: 12px;
    pointer-events: none;

    svg {
      fill: white;
      min-width: 20px;
      max-width: 20px;
      max-height: 20px;
      width: auto;
      margin-right: 20px;
    }

    label {
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: .5px;
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>