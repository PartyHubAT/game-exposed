﻿<template>
  <div id="infoBar">
    <div class="playersBar">
      <span
        v-for="player in $root.players"
        :key="player"
        class="player"
        :class="[
          player._id == $root.currentPlayer._id ? 'currentPlayer' : '',
          player.role === 'HOST' ? 'host' : ''
        ]"
      >
        {{ player.name }}
      </span>
    </div>
    <div class="progressBar" v-if="currentQuestion">
      <span class="progressText"
        >{{ currentQuestion.questionCount }} /
        {{ currentQuestion.totalQuestionCount }}</span
      >
      <div class="progressStatus" :style="progressStatusWidth"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoBar",
  props: {
    players: {
      type: Object,
      required: true
    },
    currentQuestion: {
      type: Object
    }
  },
  sockets: {},
  computed: {
    progressStatusWidth: function () {
      if (this.currentQuestion) {
        return (
          "width:" +
          (this.currentQuestion.questionCount /
            this.currentQuestion.totalQuestionCount) *
            100 +
          "%"
        );
      }
      return 0;
    }
  }
};
</script>

<style scoped>
.progressBar {
  width: 100%;
  height: 40px;
  background: var(--dark);
}
.progressStatus {
  background: var(--primary);
  height: 100%;
  transition: 0.3s ease-in-out;
}
#infoBar .progressBar .progressText {
  position: absolute;
  width: 50%;
  text-align: center;
  left: 25%;
  margin-top: 10px;
  font-size: 100%;
  color: white;
}
#infoBar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.playersBar {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  margin-bottom: 5px;
}
.player {
  padding: 5px 10px;
  background: var(--dark);
  color: var(--light);
  border-radius: 5px;
  font-size: 0.9em;
  font-family: var(--font-header);
}
.host {
  border: 1px dashed var(--secondary);
  position: relative;
}

.host::before {
  content: "HOST";
  position: absolute;
  top: -13px;
  font-size: 70%;
  color: var(--secondary);
  left: 0;
}

.currentPlayer {
  background: var(--primary);
}
</style>
