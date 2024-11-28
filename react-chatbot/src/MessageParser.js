class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("calories") && lowercase.includes("consume")) {
      this.actionProvider.caloriesIntake();
    } else if (
      lowercase.includes("weight loss") ||
      lowercase.includes("lose weight")
    ) {
      this.actionProvider.exercisesForWeightLoss();
    } else if (
      lowercase.includes("best time") &&
      lowercase.includes("exercise")
    ) {
      this.actionProvider.bestTimeToExercise();
    } else if (lowercase.includes("water") && lowercase.includes("drink")) {
      this.actionProvider.waterIntake();
    } else if (lowercase.includes("cardio") && lowercase.includes("strength")) {
      this.actionProvider.cardioVsStrengthTraining();
    } else if (lowercase.includes("build muscle")) {
      this.actionProvider.buildMuscle();
    } else if (
      lowercase.includes("lose weight") &&
      lowercase.includes("without exercise")
    ) {
      this.actionProvider.weightLossWithoutExercise();
    } else if (
      lowercase.includes("how often") &&
      lowercase.includes("exercise")
    ) {
      this.actionProvider.howOftenToExercise();
    } else if (
      lowercase.includes("pre workout") ||
      lowercase.includes("post workout")
    ) {
      this.actionProvider.prePostWorkoutNutrition();
    } else if (lowercase.includes("hiit")) {
      this.actionProvider.hiit();
    }
    if (lowercase.includes("calories") && lowercase.includes("consume")) {
      this.actionProvider.dietForWeightLoss();
    } else if (lowercase.includes("flexibility")) {
      this.actionProvider.improveFlexibility();
    } else if (
      lowercase.includes("home workouts") ||
      lowercase.includes("workout at home")
    ) {
      this.actionProvider.homeWorkouts();
    } else if (lowercase.includes("bmi")) {
      this.actionProvider.bmiCalculation();
    } else if (lowercase.includes("stay motivated")) {
      this.actionProvider.stayMotivated();
    } else if (
      lowercase.includes("pre workout") ||
      lowercase.includes("snack")
    ) {
      this.actionProvider.preWorkoutSnacks();
    } else if (
      lowercase.includes("sore") ||
      lowercase.includes("post workout")
    ) {
      this.actionProvider.postWorkoutRecovery();
    } else if (
      lowercase.includes("track fitness") ||
      lowercase.includes("track progress")
    ) {
      this.actionProvider.trackFitnessProgress();
    } else if (lowercase.includes("strength training")) {
      this.actionProvider.strengthTrainingBenefits();
    } else if (lowercase.includes("lose belly fat")) {
      this.actionProvider.loseBellyFat();
    } else if (
      lowercase.includes("hi") ||
      lowercase.includes("hello") ||
      lowercase.includes("hey")
    ) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.defaultResponse();
    }
  }
}

export default MessageParser;
