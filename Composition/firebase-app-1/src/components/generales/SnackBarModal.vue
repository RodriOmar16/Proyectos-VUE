<template>
  <v-snackbar
    v-model="activo"
    :timeout="0"
    :color="color"
    elevation="24"
  >
    {{ mensaje }}
    <div>
      <!-- Barra de progreso con cuenta regresiva -->
      <v-progress-linear
        :value="progressValue"
        color="white"
        class="mb-4"
      ></v-progress-linear>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBarModal",
  props: {
    value: Boolean, // Controla la visibilidad del snackbar
    color: { type: String, default: "success" },
    mensaje: { type: String, default: ""},
  },
  computed: {
    activo: {
      get() {
        return this.value; // Enlaza con la prop `value`
      },
      set(val) {
        this.$emit("input", val); // Emite el cambio hacia el padre
      },
    },
  },
  data() {
    return {
      progressValue: 100, // Progreso inicial (100%)
      interval: null, // Almacena el intervalo
      secondsLeft: 5, // Tiempo restante en segundos
    };
  },
  watch: {
    activo(newVal) {
      if (newVal) {
        this.startCountdown(); // Inicia la cuenta regresiva
      } else {
        this.resetCountdown(); // Reinicia el progreso al cerrar
      }
    },
  },
  methods: {
    startCountdown() {
      this.secondsLeft = 5; // Reinicia los segundos
      this.progressValue = 100; // Reinicia la barra de progreso

      clearInterval(this.interval); // Limpia intervalos previos

      this.interval = setInterval(() => {
        this.secondsLeft--; // Decrementa segundos restantes
        this.progressValue = (this.secondsLeft / 5) * 100; // Calcula el progreso

        if (this.secondsLeft <= 0) {
          clearInterval(this.interval); // Detén el intervalo
          this.activo = false; // Cierra el snackbar
        }
      }, 1000);
    },
    resetCountdown() {
      clearInterval(this.interval); // Limpia el intervalo
      this.progressValue = 100; // Restaura la barra de progreso
    },
  },
  beforeUnmount() {
    clearInterval(this.interval); // Limpia el intervalo al desmontar
  },
};
</script>

