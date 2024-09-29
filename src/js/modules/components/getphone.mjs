export default function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice ? voice.phoneNumber : "N/A";
  }