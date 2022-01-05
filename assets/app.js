const app = Vue.createApp({
  data() {
    return {
      selectGenderText: "Select Gender",
      selectAgeText: "Select Age",
    };
  },
  methods: {
    setSelectGenderText(txt) {
      this.selectGenderText = txt;
    },
    setSelectAgeText(txt) {
      this.selectAgeText = txt;
    },
  },
});

app.mount("#app");
