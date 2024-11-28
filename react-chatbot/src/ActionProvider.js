class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! I'm your Fitness Assistant. How can I help you today?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    caloriesIntake() {
      const message = this.createChatBotMessage("The recommended daily calorie intake varies. On average, women need around 2,000 calories and men need around 2,500 calories.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    exercisesForWeightLoss() {
      const message = this.createChatBotMessage("Effective exercises for weight loss include running, cycling, swimming, brisk walking, and strength training exercises like squats, lunges, and push-ups.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    bestTimeToExercise() {
      const message = this.createChatBotMessage("The best time to exercise is when you feel most energetic and can stick to your routine. Try to choose a time that works for you, whether morning or evening.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    waterIntake() {
      const message = this.createChatBotMessage("Aim to drink about 8 cups (64 ounces) of water a day. If you're active or in a hot climate, you may need more.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    cardioVsStrengthTraining() {
      const message = this.createChatBotMessage("Cardio exercises improve cardiovascular health, while strength training builds muscle. Both are important for overall fitness.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    buildMuscle() {
      const message = this.createChatBotMessage("To build muscle, focus on strength training with weights and eat a protein-rich diet. Ensure you're getting enough rest to allow muscle recovery.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    weightLossWithoutExercise() {
      const message = this.createChatBotMessage("Yes, weight loss is mostly about creating a calorie deficit. However, exercise helps improve overall health and supports weight loss.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    howOftenToExercise() {
      const message = this.createChatBotMessage("For general health, aim for at least 150 minutes of moderate-intensity exercise per week, or 75 minutes of vigorous-intensity exercise.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    prePostWorkoutNutrition() {
      const message = this.createChatBotMessage("Before a workout, have carbs and protein, like a banana with peanut butter. After a workout, focus on protein, such as a protein shake or grilled chicken.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    hiit() {
      const message = this.createChatBotMessage("HIIT (High-Intensity Interval Training) alternates between short bursts of intense exercise and rest periods. It's a great fat-burning workout!");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    dietForWeightLoss() {
        const message = this.createChatBotMessage(
          "The best diet for weight loss is one that creates a calorie deficit. A balanced diet with lean proteins, healthy fats, whole grains, and plenty of fruits and vegetables is ideal."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      improveFlexibility() {
        const message = this.createChatBotMessage(
          "Improving flexibility involves stretching and mobility exercises. Yoga and Pilates can help increase flexibility. Hold each stretch for 15-30 seconds and repeat regularly."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      homeWorkouts() {
        const message = this.createChatBotMessage(
          "Simple home workouts include bodyweight exercises like squats, push-ups, lunges, planks, and jumping jacks. You can also try yoga or follow online videos."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      bmiCalculation() {
        const message = this.createChatBotMessage(
          "BMI (Body Mass Index) is calculated by dividing your weight (in kg) by the square of your height (in meters). A healthy BMI is between 18.5 and 24.9."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      stayMotivated() {
        const message = this.createChatBotMessage(
          "To stay motivated, set small goals, track progress, find a workout you enjoy, and consider working out with a friend or joining a fitness community."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      preWorkoutSnacks() {
        const message = this.createChatBotMessage(
          "Good pre-workout snacks include carbs and protein like a banana with almond butter, oatmeal with nuts, or a yogurt parfait with fruit."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      postWorkoutRecovery() {
        const message = this.createChatBotMessage(
          "Post-workout, stretch and foam roll, stay hydrated, and get rest. If soreness persists, try light activities like walking or swimming."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      trackFitnessProgress() {
        const message = this.createChatBotMessage(
          "You can track your fitness progress through metrics like weight, measurements, strength, endurance, and flexibility. Apps and wearables can help track workouts and nutrition."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      strengthTrainingBenefits() {
        const message = this.createChatBotMessage(
          "Strength training builds muscle, boosts metabolism, enhances functional fitness, and prevents chronic conditions. It also improves posture and strength."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
      loseBellyFat() {
        const message = this.createChatBotMessage(
          "Losing belly fat involves overall body fat reduction through a calorie deficit, regular exercise, and a healthy diet. Spot reduction isn't possible, but targeting belly fat is part of overall fitness."
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    
  
    defaultResponse() {
      const message = this.createChatBotMessage("Sorry, I didn't understand that. Can you rephrase?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;