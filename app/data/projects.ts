// app/data/projects.ts
export const projects = [
  {
    id: 1,
    title: "Self-Healing Pipeline",
    category: "MLOps / Agentic AI",
    status: "Active", // Green dot
    tech: ["Docker", "Python", "LLMs", "Airflow"],
    description: "Autonomous error-correction system for data pipelines using LLM agents.",
    image: "/pipeline-grid.png", // We will make a placeholder for this
  },
  {
    id: 2,
    title: "Drone Swarm Sim",
    category: "Simulation / Computer Vision",
    status: "Dev", // Yellow dot (WIP)
    tech: ["Unreal Engine", "YOLOv8", "Simulink", "AirSim"],
    description: "Synthetic data generation and weapon detection training in hyper-realistic environments.",
    image: "/drone-wireframe.png",
  },
  {
    id: 3,
    title: "xBD Damage Assessment",
    category: "Computer Vision / XAI",
    status: "Deployed",
    tech: ["PyTorch", "React", "XAI", "Satellite Data"],
    description: "Satellite imagery analysis for post-disaster building damage classification.",
    image: "/satellite-hud.png", 
  }
];