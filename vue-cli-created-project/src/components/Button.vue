<template>
    <button>
        <div class="slot">
            <slot></slot>
        </div>
        <label>{{ text }}</label>
    </button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Button",
    props: {
        text: {
            type: String,
            default: 'Click Me!'
        },
        color: {
            type: String,
            default: 'lightgrey'
        },
        size: {
            type: String,
            default: 'large'
        }
    }
}
</script>

<style scoped>
button {
    --button-color: v-bind(color);
    --button-size: v-bind(size);
    font-size: var(--button-size);
    background-color: var(--button-color);
}

button:hover {
    /*box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);*/
    filter: invert(0.1);
}

button:active {
    box-shadow: inset 0 0 0 10em rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.5) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.5);
}

button:active label {
    filter: invert(0.1);
    text-shadow: 0.05em 0.05em black;
}

/* Span contains the button text */
label {
    /* Want this to be unselectable just like a normal button text. */
    user-select: none;
    color: var(--button-color);
    /* This always works but generates black or white text only */
    filter: grayscale(100%) contrast(100000%) invert(1);
    /* this one retains some of the original colour but it doesnt look nice for all colours*/
    /*filter: hue-rotate(160deg) brightness(80%) invert(1) saturate(100%) contrast(1000%);*/
}

button:active .slot >>> * {
    filter: brightness(90%);
}

button:disabled {
    opacity: 50%;
    cursor: not-allowed;
    pointer-events: none;
}
</style>
