const exercises = {
    chest: {
        dumbbells: [
            { name: "Dumbbell Bench Press", desc: "Lower the dumbbells to chest level with control, then press them upward until arms are fully extended.", img: "images/Dumbbell-BenchPress.jpg" },
            { name: "Dumbbell Flyes", desc: "With slightly bent arms, open wide and bring the dumbbells together above the chest, focusing on stretch and contraction.", img: "images/Dumbbell-Flyes.jpg" },
            { name: "Incline Dumbbell Bench Press", desc: "Bench press variation performed on an incline bench to emphasize the upper chest.", img: "images/Incline-Dumbbell-BenchPress.png" }
        ],
        barbell: [
            { name: "Barbell Bench Press", desc: "Lower the barbell to your chest and press it upward in a controlled motion.", img: "images/Barbell-BenchPress.jpg"},
            { name: "Incline Barbell Bench Press", desc: "Press the barbell on an incline bench to target the upper chest muscles.", img: "images/Incline-Barbell-BenchPress.jpg" },
        ],
        bodyweight: [
            { name: "Push-Ups", desc: "Keep your body straight, lower your chest to the floor and push up powerfully.", img: "images/Push-up.jpg" },
            { name: "Diamond Push-Ups", desc: "Hands close together forming a diamond shape to increase triceps and inner chest activation.", img:"images/Diamond-Push-up.jpg" },
        ],
        pullup: []
    },

    back: {
        dumbbells: [
            { name: "One-Arm Dumbbell Row", desc: "Pull the dumbbell toward your hip while keeping your back stable.", img: "images/One-Arm-Dumbbell-Row.jpg" },
            { name: "Bent-Over Dumbbell Row", desc: "Row both dumbbells while leaning forward, keeping tension on the back.", img:"images/Dumbbell-Row.jpg" },
        ],
        barbell: [
            { name: "Deadlift", desc: "Lift the barbell from the floor with a straight back, engaging the entire posterior chain.", img:"images/Deadlift.jpg" },
            { name: "Barbell Row", desc: "Pull the barbell toward your abdomen while keeping your torso stable.", img:"images/Barbell-Row.jpg" },
        ],
        bodyweight: [
            { name: "Superman Hold", desc: "Lie face down and raise arms and legs while keeping tension in the lower back.", img:"images/Superman-Hold.jpg" },
            { name: "Inverted Row", desc: "Pull your chest toward a bar or table edge using bodyweight.", img: "images/Inverted-Row.jpg" },
        ],
        pullup: [
            { name: "Pull-Ups", desc: "Overhand grip pull-ups, pulling the chin above the bar.", img:"images/Pull-up.jpg" },
            { name: "Chin-Ups", desc: "Underhand grip pull-ups with strong biceps involvement.", img:"images/Chin-up.jpg" },
        ]
    },
    shoulders: {
        dumbbells: [
            { name: "Dumbbell Shoulder Press", desc: "Press dumbbells from shoulders overhead.", img:"images/Shoulder-Press.jpg" },
            { name: "Lateral Raises", desc: "Raise dumbbells to the sides up to shoulder height.", img:"images/Lateral-Raises.jpg" },
        ],
        barbell: [
            { name: "Overhead Press", desc: "Press the barbell from shoulders overhead.", img:"images/Overhead-Press.jpg" },
        ],
        bodyweight: [
            { name: "Pike Push ups", desc: "Push-ups in a pike (V-shaped) position.", img:"images/Pike-Push-up.jpg" },
            { name: "Push ups", desc: "Keep your body straight, lower your chest to the floor and push up powerfully.", img:"images/Push-up.jpg" },
        ],
        pullup: []
    },
    biceps: {
        dumbbells: [
            { name: "Dumbbell Curls", desc: "From arms straight position curl dumbbells up", img:"images/Dumbbell-Curl.jpg" },
            { name: "Hammer Curls", desc: "Curl dumbbells in a hammer like grip", img:"images/Hammer-Curl.jpg" },
        ],
        barbell: [
            { name: "Barbell Curl", desc: "From arms staright position curl the Barbell up", img:"images/Barbell-Curl.jpg" },
            { name: "EZ-Bar Curl", desc: "From arms straight position curl the EZ-Barbell up", img: "images/EZ-Barbell-Curl.jpg" },
        ],
        bodyweight:[],
        pullup: [
            { name: "Chin-Ups", desc: "Underhand grip pull-ups with strong biceps involvement.", img:"images/Chin-up.jpg" },
        ]
    },
    triceps: {
        dumbbells: [
            { name: "Overhead Dumbbell Triceps Extension", desc: "hold dumbbell overhead, lower behind head, press up.", img:"images/Dumbbell-Overhead-Extension.jpg" },
            { name: "Dumbbell Kickback", desc: "bend over, elbows at 90°, extend arms backward, return.", img:"images/Dumbbell-Row.jpg" },
        ],
        barbell: [
            { name: "Close-Grip Bench Press", desc: "lie down, hands close, lower bar to chest, press up.", img:"images/Close-Grip.jpg" },
            { name: "Barbell Skull Crushers", desc: "lie down, lower bar toward forehead, extend arms up.", img:"images/Overhead-Extension.png" },
        ],
        bodyweight: [
            { name: "Diamond Push-Ups", desc: "hands form diamond under chest, lower and push up.", img:"images/Diamond-Push-up.jpg" },
            { name: "Push-ups", desc: "Keep your body straight, lower your chest to the floor and push up powerfully.", img:"images/Push-up.jpg" },
        ],
        pullup: []
    },
   
};

const muscleSelect = document.getElementById("muscleSelect");
const equipmentSelect = document.getElementById("equipmentSelect");
const exerciseList = document.getElementById("exerciseList");
const details = document.getElementById("exerciseDetails");
const nameEl = document.getElementById("exerciseName");
const descEl = document.getElementById("exerciseDescription");

function updateExercises() {
    exerciseList.innerHTML = "";
    details.classList.add("hidden");

    const muscle = muscleSelect.value;
    const equipment = equipmentSelect.value;

    if (!muscle || !equipment) return;

    const list = exercises[muscle][equipment];

    if (!list || list.length === 0) {
        exerciseList.innerHTML = "<p>No exercises available.</p>";
        return;
    }

    list.forEach(ex => {
        const card = document.createElement("div");
        card.className = "exercise-card";
        card.textContent = ex.name;
        card.onclick = () => {
            nameEl.textContent = ex.name;
            descEl.textContent = ex.desc;
            exerciseImage.src = ex.img;
            details.classList.remove("hidden");
        };
        exerciseList.appendChild(card);
    });
}

muscleSelect.addEventListener("change", updateExercises);
equipmentSelect.addEventListener("change", updateExercises);
