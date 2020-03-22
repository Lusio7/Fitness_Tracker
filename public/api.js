const API = {
    async getLastWorkout() {
      let res;
      try {
        res = await fetch("/api/workouts");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },

    