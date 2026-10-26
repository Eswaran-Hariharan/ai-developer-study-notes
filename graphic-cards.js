/* Clean graphic-card data for all 20 AI chapters.
   No page numbers, no section numbers, plain unruled background.
   Each card: { n, title, subtitle?, blocks:[ {h, color, items:[...] } ] }
   color keys: indigo, green, orange, blue, purple, teal, rose, slate */

const CARDS = [
  {
    n: 1, title: "Artificial Intelligence",
    subtitle: "Complete Developer Study Notes — Concepts · Examples · Interview Prep",
    blocks: [
      { h: "What's Inside", color: "indigo", items: [
        "AI Fundamentals", "Machine Learning", "Deep Learning & Neural Networks",
        "NLP (Natural Language Processing)", "Computer Vision", "Generative AI & LLMs",
        "RAG (Retrieval-Augmented Generation)", "Agentic AI & AI Agents",
        "Tools, Frameworks & Ecosystem", "Real-World Use Cases",
        "Best Practices & Common Mistakes", "Interview Questions", "Project Ideas & Cheat Sheet" ] },
      { h: "The AI Picture", color: "blue", items: [
        "AI connects Data, Models and Algorithms",
        "to Applications, Impact and Development",
        "and real-world use cases." ] },
      { h: "Mindset", color: "green", items: [
        "“AI is not just a technology — it is a way to",
        "solve real-world problems smarter.”",
        "Learn → Practice → Build → Grow" ] },
    ]
  },
  {
    n: 2, title: "Introduction to Artificial Intelligence",
    blocks: [
      { h: "What is AI?", color: "indigo", items: [
        "Machines performing tasks that need human intelligence",
        "Learning, reasoning, problem solving, perception",
        "Understanding language and making decisions",
        "Learns from data and finds patterns" ] },
      { h: "Goals of AI", color: "green", items: [
        "Think and learn like humans",
        "Solve complex problems automatically",
        "Improve efficiency and productivity",
        "Understand human language",
        "Perceive the environment; adapt over time" ] },
      { h: "Types of AI", color: "orange", items: [
        "Narrow AI (Weak) — specific tasks; today's AI",
        "General AI (Strong) — any human task; research goal",
        "Super AI — beyond human; hypothetical future" ] },
      { h: "AI vs ML vs DL", color: "blue", items: [
        "AI — broad field (includes ML, DL & more)",
        "ML — techniques to learn from data",
        "DL — deep neural networks for complex tasks" ] },
      { h: "How AI Works", color: "purple", items: [
        "Data → AI Model (train / infer) → Prediction",
        "Collect → preprocess → train → learn patterns",
        "Predict → improve with feedback" ] },
    ]
  },
  {
    n: 3, title: "History and Evolution of AI",
    blocks: [
      { h: "Early Ideas & Birth of AI", color: "indigo", items: [
        "Philosophers discussed “thinking machines” for centuries",
        "1950 — Alan Turing proposes the Turing Test",
        "1956 — term “AI” coined at Dartmouth Conference",
        "Early focus: symbolic, logic-based reasoning" ] },
      { h: "Timeline", color: "blue", items: [
        "1950s Early AI · 1960s–70s growth & expert systems",
        "1980s First AI Winter · 1990s ML revival",
        "2000s big data + GPUs · 2010s+ deep learning at scale",
        "2017 Transformers · 2022+ Generative AI / LLMs" ] },
      { h: "Key Milestones", color: "teal", items: [
        "1997 Deep Blue beats chess champion",
        "2012 AlexNet (ImageNet breakthrough)",
        "2017 Transformer architecture (attention)",
        "2022 ChatGPT · 2023+ LLMs, agents, real-world tools" ] },
      { h: "AI Winters", color: "rose", items: [
        "Periods of slow progress, reduced funding",
        "Causes: overhype, limited compute, little data",
        "Two major winters (1970s–80s, late 80s–mid 90s)" ] },
    ]
  },
  {
    n: 4, title: "Types of Artificial Intelligence",
    blocks: [
      { h: "By Intelligence Level", color: "orange", items: [
        "Narrow AI — specific tasks; exists today",
        "General AI — human-level; not achieved",
        "Super AI — beyond human; hypothetical" ] },
      { h: "By Functionality", color: "blue", items: [
        "Reactive Machines — no memory (Deep Blue)",
        "Limited Memory — uses past data (self-driving)",
        "Theory of Mind — understands emotions (future)",
        "Self-Aware AI — consciousness (theoretical)" ] },
      { h: "AI vs Human Intelligence", color: "purple", items: [
        "AI: learns from data, fast, logical, task-specific",
        "Human: learns from experience, intuitive, general",
        "AI needs retraining; humans naturally adapt" ] },
      { h: "Narrow AI in Real Life", color: "green", items: [
        "Assistants, search, recommendations, spam filters",
        "Face recognition, self-driving, translation",
        "Chatbots, fraud detection, healthcare imaging" ] },
    ]
  },
  {
    n: 5, title: "AI vs Machine Learning vs Deep Learning",
    blocks: [
      { h: "Definitions", color: "indigo", items: [
        "AI — create intelligent systems that reason & decide",
        "ML — subset of AI; learns patterns from data",
        "DL — subset of ML; neural nets with many layers" ] },
      { h: "Key Differences", color: "blue", items: [
        "Data: AI varies · ML moderate · DL large",
        "Features: ML often manual · DL automatic",
        "Compute: ML medium · DL high (GPU/TPU)" ] },
      { h: "Relationship", color: "teal", items: [
        "DL ⊂ ML ⊂ AI",
        "All DL is ML, but not all ML is DL",
        "All ML is AI, but not all AI is ML" ] },
      { h: "ML Workflow", color: "green", items: [
        "Data Collection → Preprocessing → Features",
        "→ Train → Evaluate → Predict / Inference" ] },
      { h: "Algorithm Families", color: "orange", items: [
        "Supervised — regression, classification",
        "Unsupervised — clustering, PCA",
        "Reinforcement — Q-learning, DQN, PPO" ] },
    ]
  },
  {
    n: 6, title: "Machine Learning Fundamentals",
    blocks: [
      { h: "What is ML?", color: "indigo", items: [
        "Computers learn patterns from data",
        "without being explicitly programmed",
        "Generalizes to new, unseen data" ] },
      { h: "Supervised Learning", color: "blue", items: [
        "Labeled data (input + correct output)",
        "Classification & regression",
        "Spam detection, price & disease prediction" ] },
      { h: "Unsupervised Learning", color: "purple", items: [
        "Unlabeled data; finds hidden structure",
        "Clustering, dimensionality reduction",
        "Customer segmentation, PCA, market basket" ] },
      { h: "Reinforcement Learning", color: "orange", items: [
        "Learns by interacting with an environment",
        "Rewards / penalties; maximize cumulative reward",
        "AlphaGo, robot navigation, self-driving" ] },
      { h: "Example — Linear Regression", color: "green", items: [
        "y = mX + b  (best-fit line)",
        "m = slope, b = intercept",
        "Minimizes error between predicted & actual" ] },
    ]
  },
  {
    n: 7, title: "Deep Learning and Neural Networks",
    blocks: [
      { h: "What is Deep Learning?", color: "indigo", items: [
        "Neural networks with multiple layers",
        "Automatically learns features from raw data",
        "Inspired by the human brain (neurons)",
        "Great for unstructured data" ] },
      { h: "Artificial Neuron", color: "blue", items: [
        "Weighted sum z = Σ(wᵢ·xᵢ) + b",
        "Activation f(z) adds non-linearity",
        "Output passes to the next layer" ] },
      { h: "Activation Functions", color: "teal", items: [
        "Sigmoid (0,1) · Tanh (−1,1)",
        "ReLU — most popular",
        "Leaky ReLU · Softmax (multi-class)" ] },
      { h: "Training Loop", color: "orange", items: [
        "Forward pass → compute loss",
        "Backpropagation → gradients",
        "Update weights (SGD, Adam) → repeat" ] },
      { h: "Loss & Optimizers", color: "purple", items: [
        "MSE · Binary & Categorical Cross-Entropy",
        "Optimizers: SGD, Momentum, RMSprop, Adam, AdamW" ] },
    ]
  },
  {
    n: 8, title: "Natural Language Processing (NLP)",
    blocks: [
      { h: "What is NLP?", color: "indigo", items: [
        "AI that understands & generates human language",
        "Combines linguistics, ML and deep learning",
        "Chatbots, search, translation, sentiment" ] },
      { h: "NLP Pipeline", color: "blue", items: [
        "Raw Text → Preprocessing → Tokenization",
        "→ Embeddings → Model (Transformer/LLM) → Output" ] },
      { h: "Embeddings", color: "teal", items: [
        "Text → numeric vectors",
        "Capture semantic meaning; similar words close",
        "Word2Vec, GloVe, FastText, BERT, OpenAI" ] },
      { h: "Transformers", color: "purple", items: [
        "Self-attention understands context",
        "Parallelizable, handles long sequences",
        "BERT (encoder), GPT (decoder), T5" ] },
      { h: "BERT vs GPT", color: "orange", items: [
        "BERT — encoder, bidirectional, understanding",
        "GPT — decoder, unidirectional, generation" ] },
    ]
  },
  {
    n: 9, title: "Computer Vision",
    blocks: [
      { h: "What is Computer Vision?", color: "indigo", items: [
        "AI that understands images and video",
        "Image processing + ML + deep learning",
        "Self-driving, face recognition, medical imaging" ] },
      { h: "CV Pipeline", color: "blue", items: [
        "Image/Video → Preprocessing → Feature Extraction",
        "→ Model (CNN) → Output (prediction)" ] },
      { h: "Vision Tasks", color: "teal", items: [
        "Classification, object detection, segmentation",
        "Tracking, generation, pose estimation, captioning" ] },
      { h: "CNN", color: "purple", items: [
        "Designed for image data",
        "Convolution → ReLU → Pooling → Fully Connected",
        "Learns spatial features automatically" ] },
      { h: "Architectures", color: "orange", items: [
        "LeNet, AlexNet, VGG, ResNet, Inception",
        "MobileNet, EfficientNet, YOLO (real-time)",
        "Segmentation: U-Net, SegNet, Mask R-CNN" ] },
    ]
  },
  {
    n: 10, title: "Generative AI & Large Language Models",
    blocks: [
      { h: "What is Generative AI?", color: "indigo", items: [
        "Generates new text, images, code, audio, video",
        "LLMs trained on massive text data",
        "Learn probability of the next token",
        "GPT, LLaMA, Claude, Gemini" ] },
      { h: "How LLMs Work", color: "blue", items: [
        "Training: data → tokenize → Transformer → weights",
        "Inference: prompt → model → next token → output" ] },
      { h: "Key Components", color: "teal", items: [
        "Tokenization, embeddings, positional encoding",
        "Self-attention, multi-head attention",
        "Feed-forward, layer norm, decoder" ] },
      { h: "Decoding Strategies", color: "purple", items: [
        "Greedy, beam search, sampling",
        "Temperature (randomness)",
        "Top-k / Top-p (nucleus) sampling" ] },
      { h: "Strengths & Limits", color: "orange", items: [
        "Human-like text, few-shot, fine-tunable",
        "Can hallucinate; no real-time knowledge",
        "Expensive to train; needs guardrails" ] },
    ]
  },
  {
    n: 11, title: "Prompt Engineering",
    blocks: [
      { h: "What & Why", color: "indigo", items: [
        "Designing effective inputs for LLMs",
        "Improves quality, reduces hallucinations",
        "Controls behavior; saves time and cost" ] },
      { h: "Anatomy of a Good Prompt", color: "blue", items: [
        "Role · Context · Instruction",
        "Input Data · Constraints · Output Format" ] },
      { h: "Shot Learning", color: "teal", items: [
        "Zero-shot — no examples",
        "One-shot — a single example",
        "Few-shot — multiple examples" ] },
      { h: "Techniques", color: "purple", items: [
        "Chain-of-Thought (step by step)",
        "Self-consistency, Tree-of-Thought",
        "RAG, structured output, iterative prompting" ] },
      { h: "Best Practices", color: "green", items: [
        "Be clear and specific; give context",
        "Specify format; set constraints",
        "Iterate, test, validate the output" ] },
    ]
  },
  {
    n: 12, title: "Retrieval-Augmented Generation (RAG)",
    blocks: [
      { h: "What is RAG?", color: "indigo", items: [
        "Combines retrieval with LLM generation",
        "Uses your private / up-to-date data",
        "Reduces hallucinations; grounded answers" ] },
      { h: "Architecture", color: "blue", items: [
        "Ingestion: docs → chunk → embed → vector DB",
        "Query: embed → similarity search → context → LLM" ] },
      { h: "Chunking Strategies", color: "teal", items: [
        "Fixed size, recursive",
        "Semantic, sliding window (overlap)" ] },
      { h: "Vector DB & Search", color: "purple", items: [
        "FAISS, Pinecone, Qdrant, Weaviate, Chroma",
        "Cosine similarity (common), Euclidean, dot product",
        "Retrieve top-K chunks as context" ] },
      { h: "RAG vs Fine-Tuning", color: "orange", items: [
        "RAG — no retraining, dynamic data, lower cost",
        "Fine-tuning — task behavior, higher cost" ] },
    ]
  },
  {
    n: 13, title: "AI Agents and Agentic AI",
    blocks: [
      { h: "What are AI Agents?", color: "indigo", items: [
        "Autonomous systems that plan and act",
        "Use tools (APIs, DB, web, files)",
        "LLMs with reasoning, planning, memory" ] },
      { h: "Key Characteristics", color: "blue", items: [
        "Autonomy, goal-oriented, planning",
        "Tool use, memory, reasoning",
        "Adaptability, multi-agent collaboration" ] },
      { h: "Execution Loop", color: "teal", items: [
        "Understand goal → plan → select tools",
        "→ execute → reflect/iterate → finish" ] },
      { h: "Memory", color: "purple", items: [
        "Short-term (within session)",
        "Long-term (across sessions)",
        "External (vector DB / knowledge base)" ] },
      { h: "Multi-Agent System", color: "orange", items: [
        "Coordinator (planner) delegates to agents",
        "Research + Analysis + Writing agents",
        "Collaborate to solve complex tasks" ] },
    ]
  },
  {
    n: 14, title: "AI Tools and Frameworks",
    blocks: [
      { h: "LLM Frameworks", color: "indigo", items: [
        "LangChain — chains, agents, memory",
        "LlamaIndex — connect LLMs to your data",
        "Haystack — RAG pipelines" ] },
      { h: "Model APIs", color: "blue", items: [
        "OpenAI (GPT-4o), Anthropic (Claude)",
        "Google (Gemini), Meta (Llama)",
        "Mistral, Together AI" ] },
      { h: "Vector Databases", color: "teal", items: [
        "Pinecone, Qdrant",
        "Weaviate, Chroma, FAISS" ] },
      { h: "Agents & Orchestration", color: "purple", items: [
        "CrewAI, AutoGen, LangGraph, n8n" ] },
      { h: "UI & Deployment", color: "orange", items: [
        "Streamlit, Gradio, FastAPI, React",
        "Docker, Kubernetes, AWS/GCP/Azure",
        "Hugging Face — open models & datasets" ] },
    ]
  },
  {
    n: 15, title: "Fine-tuning and Model Training",
    blocks: [
      { h: "What is Fine-tuning?", color: "indigo", items: [
        "Further train a pre-trained model",
        "Adapt to a task or domain",
        "Learns custom knowledge, style, instructions" ] },
      { h: "Why Fine-tune?", color: "green", items: [
        "Better on domain-specific tasks",
        "Understands your business context",
        "Reduces hallucinations; private data" ] },
      { h: "Types", color: "blue", items: [
        "Full fine-tuning (all params, high cost)",
        "PEFT, LoRA, QLoRA (efficient)",
        "Instruction & domain fine-tuning" ] },
      { h: "Process", color: "teal", items: [
        "Prepare data → tokenize → choose base",
        "→ train (LoRA/full) → evaluate → deploy" ] },
      { h: "Fine-tune vs Prompt vs RAG", color: "orange", items: [
        "Prompting — simple tasks, low cost",
        "RAG — knowledge lookup, factual",
        "Fine-tuning — domain-specific, customized" ] },
    ]
  },
  {
    n: 16, title: "Evaluation, Guardrails & Responsible AI",
    blocks: [
      { h: "Why Evaluate?", color: "indigo", items: [
        "Ensure accurate, reliable responses",
        "Detect hallucinations, bias, toxicity",
        "Critical for production systems" ] },
      { h: "Metrics", color: "blue", items: [
        "Accuracy, precision, recall, F1",
        "BLEU, ROUGE, BERTScore, perplexity",
        "Human evaluation for final validation" ] },
      { h: "Hallucinations", color: "rose", items: [
        "Made-up but realistic-looking info",
        "Reduce with RAG, clear prompts, citations",
        "“If unsure, say you don't know”" ] },
      { h: "Guardrails", color: "purple", items: [
        "Input, output, content, context",
        "Tool and policy guardrails",
        "Validate and moderate responses" ] },
      { h: "Responsible AI", color: "green", items: [
        "Fairness, accountability, transparency",
        "Privacy, safety, human-centric",
        "Inclusiveness, sustainability" ] },
    ]
  },
  {
    n: 17, title: "AI Application Architecture",
    blocks: [
      { h: "Key Components", color: "indigo", items: [
        "UI → API layer → orchestration (RAG/agents)",
        "LLMs, databases, vector DB, cache",
        "Auth, monitoring, deployment" ] },
      { h: "End-to-End Flow", color: "blue", items: [
        "Query → authenticate → process intent",
        "→ retrieve → build context → LLM",
        "→ post-process → cache → log" ] },
      { h: "Tech Stack", color: "teal", items: [
        "FastAPI / Spring Boot / Node",
        "Pinecone/Qdrant · PostgreSQL · Redis",
        "Docker, Kubernetes, cloud" ] },
      { h: "Caching & Scaling", color: "orange", items: [
        "Cache embeddings, chunks, responses (TTL)",
        "Containerize, autoscale, CI/CD",
        "Separate stateless and stateful parts" ] },
      { h: "Security", color: "rose", items: [
        "JWT/OAuth, RBAC, input validation",
        "Encrypt data; rate limits",
        "GDPR / HIPAA compliance" ] },
    ]
  },
  {
    n: 18, title: "AI Projects for Developers",
    blocks: [
      { h: "Why Build Projects?", color: "indigo", items: [
        "Learn by doing; build a portfolio",
        "Show end-to-end skills (data → deploy)",
        "Become job-ready for AI/LLM roles" ] },
      { h: "Learning Roadmap", color: "blue", items: [
        "Basics → beginner → intermediate",
        "→ advanced → deploy & share" ] },
      { h: "Beginner", color: "green", items: [
        "Chatbot, text summarizer",
        "Sentiment analysis, image classifier",
        "Speech to text (Whisper)" ] },
      { h: "Intermediate", color: "teal", items: [
        "RAG chat with PDF, multi-doc QA",
        "Resume analyzer, code assistant",
        "AI image generator" ] },
      { h: "Advanced", color: "orange", items: [
        "Research agent, multi-agent system",
        "Enterprise RAG, custom fine-tuned model",
        "Real-time streaming app" ] },
    ]
  },
  {
    n: 19, title: "AI Engineer Interview Preparation",
    blocks: [
      { h: "Strategy", color: "indigo", items: [
        "Master core concepts; practice coding",
        "Learn system design; do mock interviews",
        "Build real projects; keep a cheat sheet" ] },
      { h: "Topics to Cover", color: "blue", items: [
        "Python, DS & algorithms, system design",
        "ML, deep learning, Transformers",
        "GenAI, RAG, agents, frameworks, vector DBs" ] },
      { h: "Common Questions", color: "teal", items: [
        "How do LLMs work? attention? embeddings?",
        "Implement a RAG pipeline; chunking?",
        "What is an agent? tool calling? memory?" ] },
      { h: "System Design", color: "purple", items: [
        "RAG Q&A system, multi-agent system",
        "High traffic / low latency chatbot",
        "Embeddings at scale, data pipelines" ] },
      { h: "Tips", color: "green", items: [
        "Explain your thought process",
        "Discuss trade-offs; use real examples",
        "Be confident, curious and honest" ] },
    ]
  },
  {
    n: 20, title: "AI Master Cheat Sheet",
    subtitle: "From basics to production — everything in one card",
    blocks: [
      { h: "AI Ecosystem", color: "indigo", items: [
        "Data Sources → Processing → LLM Layer",
        "→ Tools & Frameworks → Application Layer",
        "→ Deployment & Monitoring" ] },
      { h: "Key Concepts", color: "blue", items: [
        "ML, Deep Learning, LLMs, RAG",
        "Agents, prompt engineering, fine-tuning",
        "Evaluation, guardrails, deployment" ] },
      { h: "LLM App Workflow", color: "teal", items: [
        "Use case → ingestion → embedding/indexing",
        "→ build → evaluate → deploy",
        "→ monitor → scale & maintain" ] },
      { h: "Learning Roadmap", color: "purple", items: [
        "Foundations (2–4 wks) → core concepts (4–8)",
        "→ hands-on projects (8–16)",
        "→ advanced (4–8) → production & career" ] },
      { h: "Final Takeaway", color: "green", items: [
        "AI augments human capabilities",
        "RAG + agents + LLMs unlock real value",
        "Keep learning, building and exploring" ] },
    ]
  },
];

