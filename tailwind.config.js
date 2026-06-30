export default {
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.15)" },
          "40%": { transform: "scale(0.95)" },
          "60%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1s infinite",
      },
    },
  },
};