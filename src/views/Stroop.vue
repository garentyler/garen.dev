<template>
  <div class="main">
    <h1 v-if="state != 1">TOK Stroop Effect Experiment</h1>
    <Paragraph>
      <!-- Before/who-->
      <div v-if="state == 0">
        <p>Select the color of the text shown.</p><br>
        <select name="age" v-model="age">
          <option :value="null">Please answer your age.</option>
          <option v-for="n in 100" :key="n" :value="n">{{ n }}</option>
        </select>
        <p v-if="ageerror">Your age is required.</p>
        <p style="font-size: 2em;" @click="startTest">Click here to start the test.</p>
      </div>
      <!-- During -->
      <div v-if="state == 1">
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
      <!-- Done -->
      <p v-if="state == 2">That's it! Thank you for your time.</p><br>
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue';
import StroopText from '@/components/StroopText.vue';
import { STROOPDATA_URL } from '@/consts';
import ky from 'ky';

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
      numQuestions: 10,
      currentTime: null,
      state: 0, // 0: before/who, 1: during, 2: done
      age: null,
      ageerror: false,
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
        age: this.age,
      };
      this.info.push(info);
      if (this.info.length == this.numQuestions) {
        this.endTest();
      }
      this.currentTime = now;
      this.setRandomText();
      /* eslint-enable */
    },
    setRandomText() {
      this.colorIndex = Math.floor(this.colorList.length * Math.random());
      this.textIndex = Math.floor(this.colorList.length * Math.random());
    },
    startTest() {
      if (this.age == null) {
        this.ageerror = true;
        return;
      }
      this.setRandomText();
      this.currentTime = Date.now();
      this.state = 1;
    },
    endTest() {
      this.state = 2;
      this.info.forEach((i) => {
        this.sendData(i);
      });
    },
    async sendData(data) {
      let requestUrl = STROOPDATA_URL;
      requestUrl += `?response=${data.response}`;
      requestUrl += `&color=${data.color}`;
      requestUrl += `&text=${data.text}`;
      requestUrl += `&timeTaken=${data.timeTaken}`;
      requestUrl += `&age=${data.age}`;
      const response = await ky.get(requestUrl);
      console.log(data, response);  /* eslint-disable-line */
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

.survey {
  display: flex;
  flex-direction: column;
  font-size: 2em;
}

.red {
  color: red;
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
</style>
