export type Project = {
  id: string;
  title: string;
  status: "Featured" | "In Progress" | "Completed" | "Coming Soon";
  description: string;
  company?: string;
  problem?: string;
  approach?: string;
  technicalSol?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    id: "project-jarvis",
    title: "Project JARVIS — Local Voice AI Desktop Assistant",
    status: "Featured",
    company: "Personal Project",
    description:
      "A fully local, hands-free hybrid AI desktop assistant for Windows 11. Engineered an ultra low-latency multi-stage pipeline combining wake-word detection, CUDA-accelerated speech-to-text, Gemini 2.0 Flash intelligence, and neural TTS to execute system control commands and conversational interactions.",
    problem:
      "Commercial voice assistants either suffer from high roundtrip cloud latency, invasive privacy concerns, or lack granular system-level operating system controls on Windows.",
    approach:
      "Architected a streaming audio pipeline that runs wake-word inference and CUDA speech transcription locally on the GPU. Delegated conversational reasoning and OS tool-calling to Google Gemini 2.0 Flash, with an offline neural TTS engine for snappy, low-latency audio response.",
    technicalSol:
      "Built with Python & PyTorch using openwakeword for 0% cloud wake detection, faster-whisper with FP16 CUDA kernels for sub-300ms speech-to-text, and Google Gemini 2.0 Flash API for intelligent task parsing. Integrated Piper-TTS for natural offline voice synthesis and Win32 APIs for volume, window management, and application launch controls.",
    tags: ["Python", "faster-whisper", "CUDA", "Gemini 2.0 Flash", "PyTorch", "openwakeword", "piper-tts", "Win32 API"],
    githubUrl: "https://github.com/ajaykumaryadav-collab/jarvis",
  },
  {
    id: "project-credtitans",
    title: "CredTitans — Land Intelligence & Verification System",
    status: "Featured",
    company: "Engineering Hackathon & Research",
    description:
      "An end-to-end, multimodal AI-powered platform for cadastral land intelligence, ecological risk assessment, and legal verification. Integrates satellite imagery (NDVI vegetation index, temporal change detection), OpenStreetMap GIS radar, real-time GDELT risk signals, and Google Gemini AI for contextual due-diligence dossiers and ROI forecasting.",
    problem:
      "Real estate investments and agricultural land acquisitions frequently suffer from fraudulent title deeds, hidden ecological restrictions, unrecorded encroachment, and opaque due-diligence data.",
    approach:
      "Developed a geospatial intelligence workflow combining optical band satellite telemetry with localized GIS infrastructure scanning, geo-radius conflict detection, and automated LLM-generated valuation & due-diligence audits.",
    technicalSol:
      "FastAPI & Node.js backend pipelines processing Sentinel/Landsat multispectral satellite imagery using OpenCV and PyTorch to compute normalized difference vegetation indices (NDVI) and temporal terrain shifts. Front-end powered by React & Leaflet GIS with radar layers, coupled with GDELT real-time regional threat intelligence and Gemini AI for comprehensive automated due-diligence reports.",
    tags: ["React 18", "FastAPI", "Python", "PyTorch", "OpenCV", "Leaflet GIS", "Gemini AI", "GDELT", "Node.js"],
    githubUrl: "https://github.com/ajaykumaryadav-collab/credtitans",
  },
  {
    id: "coming-soon",
    title: "Autonomous Agent Orchestration",
    status: "Coming Soon",
    description: "Next-generation multi-agent autonomous framework in active development. Stay tuned.",
    tags: ["Python", "LLMs", "Vector DBs", "Tool Calling"],
  },
];
