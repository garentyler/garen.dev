<template>
  <div class="main">
    <h1 v-if="!started">TOK Stroop Effect Experiment</h1>
    <Paragraph>
      <p v-if="!started">Select the color of the text shown.</p><br>
      <div v-if="started">
        <StroopText
          :color="currentColor"
          :text="currentText"
        />
        <div class="buttons">
          <div v-for="color in colorList" :key="color" @click="updateText(color)">
            {{ color }}
          </div>
        </div>
      </div>
      <div v-else>
        <p style="font-size: 2em;" @click="startTest">Click here to start the test.</p>
      </div>
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue';
import StroopText from '@/components/StroopText.vue';

export default {
  components: {
    Paragraph,
    StroopText,
  },
  data() {
    return {
      colorIndex: 0,
      textIndex: 0,
      colorList: ['red', 'yellow', 'green', 'blue'],
      info: [],
      currentTime: null,
      started: false,
    };
  },
  methods: {
    updateText(response) {
      /* eslint-disable */
      const now = Date.now();
      const info = {
        response,
        color: this.colorList[this.colorIndex],
        text: this.colorList[this.textIndex],
        timeTaken: now - this.currentTime,
      };
      console.log(info);
      this.info.push(info);
      this.currentTime = now;
      this.setRandomText();
      /* eslint-enable */
    },
    setRandomText() {
      this.colorIndex = Math.floor(this.colorList.length * Math.random());
      this.textIndex = Math.floor(this.colorList.length * Math.random());
    },
    startTest() {
      this.setRandomText();
      this.currentTime = Date.now();
      this.started = true;
    },
  },
  computed: {
    currentColor() {
      return this.colorList[this.colorIndex];
    },
    currentText() {
      return this.colorList[this.textIndex];
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  font-size: 2em;
}

.red {
  color: red;
}
.orange {
  color: orange;
}
.yellow {
  color: yellow;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
.purple {
  color: purple;
}
</style>
