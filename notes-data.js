/* Artificial Intelligence — Complete Developer Study Notes (web edition)
   Content transcribed from the original 20-page notes by Rahul Yadav.
   Each entry: { n: chapter number, img: image file, title, page, tags[], html } */

const NOTES = [
{
  n: 1, img: "AI-01.jpg", page: "1 / 20",
  title: "Overview & What's Inside",
  tags: ["intro", "roadmap"],
  html: `
    <p>These notes teach AI from basics to advanced and help you build real-world
    applications. Three threads run through every chapter: <strong>concepts</strong>,
    <strong>practical examples</strong>, and <strong>interview preparation</strong>.</p>

    <h3>What's inside</h3>
    <ul>
      <li>AI Fundamentals</li>
      <li>Machine Learning</li>
      <li>Deep Learning</li>
      <li>Neural Networks</li>
      <li>NLP (Natural Language Processing)</li>
      <li>Computer Vision</li>
      <li>Generative AI &amp; LLMs</li>
      <li>RAG (Retrieval-Augmented Generation)</li>
      <li>Agentic AI &amp; AI Agents</li>
      <li>Tools, Frameworks &amp; Ecosystem</li>
      <li>Real-World Use Cases</li>
      <li>Best Practices &amp; Common Mistakes</li>
      <li>Interview Questions</li>
      <li>Project Ideas &amp; Final Cheat Sheet</li>
    </ul>

    <h3>The AI picture</h3>
    <p>At the center sits <strong>AI</strong>, connected to <em>Data</em>, <em>Models</em>,
    <em>Algorithms</em>, <em>Applications</em>, <em>Impact</em>, <em>Real-World Use Cases</em>,
    and <em>Development</em>.</p>

    <div class="note">“Artificial Intelligence is not just a technology, it is a way to solve
    real-world problems smarter.”</div>
    <p><strong>Learn → Practice → Build → Grow.</strong></p>
  `
},
{
  n: 2, img: "AI-02.jpg", page: "2 / 20",
  title: "Introduction to Artificial Intelligence",
  tags: ["fundamentals", "types of ai", "narrow general super"],
  html: `
    <div class="grid2">
      <div>
        <h3>2.1 What is Artificial Intelligence?</h3>
        <ul>
          <li>AI is the ability of a machine or computer system to perform tasks that normally
          require human intelligence.</li>
          <li>It includes learning, reasoning, problem solving, perception, understanding
          language and decision making.</li>
          <li>AI systems learn from data, identify patterns, and make intelligent decisions to
          solve real-world problems.</li>
        </ul>
      </div>
      <div>
        <h3>2.2 Goals of AI</h3>
        <ul>
          <li>Build systems that can think and learn like humans.</li>
          <li>Solve complex problems automatically.</li>
          <li>Improve efficiency and productivity.</li>
          <li>Understand and process human language.</li>
          <li>Perceive and understand the environment (images, audio, video).</li>
          <li>Make accurate predictions and decisions.</li>
          <li>Create systems that adapt and improve over time.</li>
        </ul>
      </div>
    </div>

    <h3>2.3 Types of AI</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
      <tr><td><strong>1. Narrow AI (Weak AI)</strong></td><td>Designed for specific tasks. Examples: ChatGPT, image recognition, voice assistants. Most AI today is Narrow AI.</td></tr>
      <tr><td><strong>2. General AI (Strong AI)</strong></td><td>Can perform any intellectual task like humans; understand, learn and apply knowledge across domains. Still a research goal (not achieved).</td></tr>
      <tr><td><strong>3. Super AI</strong></td><td>Intelligence beyond human level; could outperform humans in almost all areas. Hypothetical future concept.</td></tr>
    </tbody></table>

    <h3>2.4 AI vs Machine Learning vs Deep Learning</h3>
    <ul>
      <li><strong>AI</strong> → broad field of making machines intelligent (simulate human intelligence); includes ML, DL and more.</li>
      <li><strong>ML</strong> → subset of AI that learns from data without explicit programming.</li>
      <li><strong>DL</strong> → subset of ML that uses neural networks with multiple layers for complex tasks (images, text, speech).</li>
    </ul>

    <h3>2.5 Examples of AI in Real Life</h3>
    <table class="tbl"><thead><tr><th>Domain</th><th>Examples</th></tr></thead><tbody>
      <tr><td>Virtual Assistants</td><td>Siri, Google Assistant, Alexa</td></tr>
      <tr><td>Search Engines</td><td>Google Search (rankings, NLP)</td></tr>
      <tr><td>Recommendation</td><td>YouTube, Netflix, Amazon</td></tr>
      <tr><td>Healthcare</td><td>Disease prediction, medical imaging</td></tr>
      <tr><td>Finance</td><td>Fraud detection, risk analysis</td></tr>
      <tr><td>Automotive</td><td>Self-driving cars (Tesla)</td></tr>
      <tr><td>Education</td><td>Personalized learning</td></tr>
      <tr><td>E-commerce</td><td>Product recommendations</td></tr>
      <tr><td>Social Media</td><td>Content filtering, face recognition</td></tr>
      <tr><td>Chatbots</td><td>ChatGPT, customer support bots</td></tr>
    </tbody></table>

    <h3>2.6 How AI Works? (High Level)</h3>
    <p><strong>Data (Input) → AI Model (Training / Inference) → Decision / Prediction (Output)</strong></p>
    <ol>
      <li>Collect data (text, images, audio, etc.)</li>
      <li>Preprocess and clean the data</li>
      <li>Train a model using algorithms</li>
      <li>Model learns patterns from data</li>
      <li>Use the trained model for prediction / decision</li>
      <li>Continuously improve with new data and feedback</li>
    </ol>

    <div class="takeaway"><strong>2.7 Key Takeaways:</strong> AI is a broad field with many
    subfields. Narrow AI is widely used in real-world applications. ML is a key part of AI.
    Deep learning is powerful for complex data (images, text, audio). AI is transforming almost
    every industry.</div>

    <div class="interview"><strong>2.8 Interview Questions:</strong> What is AI? Give real-world
    examples. · Difference between AI, ML and DL. · Types of AI with examples. · Why is AI
    important today? · What are the applications of AI in your domain?</div>
  `
},
{
  n: 3, img: "AI-03.jpg", page: "3 / 20",
  title: "History and Evolution of AI",
  tags: ["history", "timeline", "ai winter", "turing"],
  html: `
    <div class="grid2">
      <div>
        <h3>3.1 Early Ideas (Before 1950)</h3>
        <ul>
          <li>The idea of creating intelligent machines is not new; philosophers discussed
          “thinking machines” for centuries.</li>
          <li>Early concepts came from logic, mathematics and philosophy.</li>
          <li>Key influences: Aristotle's logic, Leibniz's calculation machine, and symbolic reasoning.</li>
        </ul>
      </div>
      <div>
        <h3>3.2 Birth of AI (1950s)</h3>
        <ul>
          <li>1950 — Alan Turing proposed the Turing Test to evaluate machine intelligence.</li>
          <li>1956 — the term “Artificial Intelligence” was coined by John McCarthy at the Dartmouth Conference.</li>
          <li>Early research focused on symbolic AI, logic-based reasoning and problem solving.</li>
        </ul>
        <p class="tags"><span class="tag">Alan Turing (1912–1954)</span><span class="tag">Turing Test: can a machine exhibit intelligent behavior like a human?</span></p>
      </div>
    </div>

    <h3>3.3 Timeline of AI Evolution</h3>
    <table class="tbl"><thead><tr><th>Era</th><th>Theme</th><th>Highlights</th></tr></thead><tbody>
      <tr><td>1950s</td><td>Early AI</td><td>Turing Test (1950), Dartmouth Conference (1956), symbolic AI, rule-based systems</td></tr>
      <tr><td>1960s–1970s</td><td>Growth &amp; Exploration</td><td>Expert systems, early NLP, early robots, high expectations</td></tr>
      <tr><td>1980s</td><td>First AI Winter</td><td>Limited progress, overhyped expectations, reduced funding, compute limits</td></tr>
      <tr><td>1990s</td><td>Revival</td><td>ML gains popularity, statistical methods, more data &amp; better hardware, neural-net research restarts</td></tr>
      <tr><td>2000s</td><td>Modern AI Era</td><td>Big data, powerful GPUs, deep learning breakthroughs, industry adoption (Google, Facebook)</td></tr>
      <tr><td>2010s–Present</td><td>AI Everywhere</td><td>Deep learning at scale, Transformers (2017), LLMs, Generative AI (2022+), wide adoption</td></tr>
    </tbody></table>

    <h3>3.4 Key Milestones</h3>
    <table class="tbl"><thead><tr><th>Year</th><th>Milestone / Event</th></tr></thead><tbody>
      <tr><td>1950</td><td>Alan Turing proposes the Turing Test</td></tr>
      <tr><td>1956</td><td>Dartmouth Conference — term “AI” coined</td></tr>
      <tr><td>1960s</td><td>Early AI programs and expert systems</td></tr>
      <tr><td>1970s</td><td>First AI Winter (lack of progress)</td></tr>
      <tr><td>1980s</td><td>Knowledge-based systems, toy expert systems</td></tr>
      <tr><td>1990s</td><td>Machine learning, statistical methods</td></tr>
      <tr><td>1997</td><td>IBM Deep Blue beats world chess champion</td></tr>
      <tr><td>2000s</td><td>Big data, internet, better hardware (GPUs)</td></tr>
      <tr><td>2012</td><td>AlexNet — deep learning breakthrough (ImageNet)</td></tr>
      <tr><td>2017</td><td>Transformer architecture (attention mechanism)</td></tr>
      <tr><td>2022</td><td>ChatGPT and Generative AI popularized</td></tr>
      <tr><td>2023+</td><td>LLMs, multimodal models, AI agents, real-world tools</td></tr>
    </tbody></table>

    <h3>3.5 AI Winters</h3>
    <ul>
      <li>Periods when AI progress was slower than expected, leading to reduced funding and interest.</li>
      <li>Main reasons: overhyped expectations, limited computing power, lack of large datasets,
      difficulty solving real-world problems.</li>
      <li>Two major winters: First (1970s–early 1980s) and Second (late 1980s–mid 1990s).</li>
      <li>Afterwards, researchers focused on practical, data-driven approaches like ML.</li>
    </ul>

    <h3>3.6 Evolution of AI Models</h3>
    <p><strong>Rule-Based Systems (1950s–80s)</strong> → <strong>Machine Learning (1990s–2000s)</strong>
    → <strong>Deep Learning (2010s)</strong> → <strong>Generative AI &amp; LLMs (2020s+)</strong>:
    from hand-written rules, to learning from data, to neural networks with multiple layers, to
    large models that generate text, images, code and more.</p>
  `
},
{
  n: 4, img: "AI-04.jpg", page: "4 / 20",
  title: "Types of Artificial Intelligence",
  tags: ["narrow", "general", "super", "functionality", "ai vs human"],
  html: `
    <h3>4.1 Classification by Intelligence Level</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Key points</th></tr></thead><tbody>
      <tr><td><strong>Narrow AI (Weak AI)</strong></td><td>Designed for specific tasks; works in a limited domain; cannot perform outside its training. Examples: ChatGPT, Siri, Google Search, recommendation systems.</td></tr>
      <tr><td><strong>General AI (Strong AI)</strong></td><td>Can understand, learn and perform any intellectual task like humans; transfer knowledge across domains. Still a research goal — human-level AI does not exist yet.</td></tr>
      <tr><td><strong>Super AI</strong></td><td>Intelligence beyond human level; could outperform humans in almost all areas. A hypothetical future concept that raises ethical and safety concerns. Not developed yet.</td></tr>
    </tbody></table>

    <h3>4.2 Classification by Functionality</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Description</th><th>Examples</th></tr></thead><tbody>
      <tr><td>Reactive Machines</td><td>No memory, react to current input only</td><td>IBM Deep Blue (chess)</td></tr>
      <tr><td>Limited Memory</td><td>Uses past data for short-term decisions</td><td>Self-driving cars, most ML models</td></tr>
      <tr><td>Theory of Mind</td><td>Can understand human emotions, beliefs, intentions (research stage)</td><td>Social robots (future)</td></tr>
      <tr><td>Self-Aware AI</td><td>Has self-consciousness (still a theoretical concept)</td><td>Not available yet</td></tr>
    </tbody></table>

    <h3>4.3 AI vs Human Intelligence</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>AI</th><th>Human</th></tr></thead><tbody>
      <tr><td>Learning</td><td>Learns from data</td><td>Learns from experience</td></tr>
      <tr><td>Reasoning</td><td>Logical and data-driven</td><td>Emotional and intuitive</td></tr>
      <tr><td>Speed</td><td>Very fast</td><td>Comparatively slow</td></tr>
      <tr><td>Accuracy</td><td>High (if trained well)</td><td>Can make mistakes</td></tr>
      <tr><td>Creativity</td><td>Limited (improving)</td><td>High</td></tr>
      <tr><td>Emotions</td><td>None</td><td>Yes</td></tr>
      <tr><td>Adaptability</td><td>Requires retraining</td><td>Naturally adaptive</td></tr>
      <tr><td>Energy</td><td>Requires computing power</td><td>Biological brain</td></tr>
      <tr><td>Scope</td><td>Task specific</td><td>General purpose</td></tr>
    </tbody></table>

    <h3>4.4 Examples of Narrow AI in Real Life</h3>
    <table class="tbl"><thead><tr><th>Application</th><th>How it uses AI</th></tr></thead><tbody>
      <tr><td>Virtual Assistants</td><td>Speech recognition, NLP</td></tr>
      <tr><td>Search Engines</td><td>Ranking using ML algorithms</td></tr>
      <tr><td>Recommendation Systems</td><td>Suggests content based on user behavior</td></tr>
      <tr><td>Spam Filters</td><td>Classifies emails as spam or not</td></tr>
      <tr><td>Face Recognition</td><td>Computer vision models</td></tr>
      <tr><td>Self-Driving Cars</td><td>Perception, object detection, decision making</td></tr>
      <tr><td>Language Translation</td><td>NLP and deep learning</td></tr>
      <tr><td>Chatbots</td><td>Intent classification and response generation</td></tr>
      <tr><td>Fraud Detection</td><td>Detecting unusual patterns in transactions</td></tr>
      <tr><td>Healthcare</td><td>Disease prediction, medical image analysis</td></tr>
    </tbody></table>

    <h3>4.6 Relationship Between Types</h3>
    <p>Nested from broad to narrow: <strong>Artificial Intelligence</strong> (all intelligent
    systems) contains <strong>General AI</strong> (human-level intelligence) which contains
    <strong>Narrow AI</strong> (task specific). <strong>Super AI</strong> sits beyond human
    intelligence — more intelligence and capabilities as you move outward.</p>

    <div class="takeaway"><strong>4.7 Key Takeaways:</strong> Narrow AI is widely used today;
    General AI is still a research goal; Super AI is a future concept with opportunities and risks.
    AI can be classified by intelligence level and by functionality. Most current systems are
    Narrow AI using ML and DL.</div>

    <div class="interview"><strong>4.8 Interview Questions:</strong> Different types of AI? ·
    Difference between Narrow, General and Super AI. · What are Reactive Machine and Limited Memory
    AI? · Real-world examples of Narrow AI. · Why is General AI difficult to achieve? · Potential
    risks of Super AI?</div>
  `
},
{
  n: 5, img: "AI-05.jpg", page: "5 / 20",
  title: "AI vs Machine Learning vs Deep Learning",
  tags: ["ml", "dl", "workflow", "algorithms"],
  html: `
    <h3>5.1 Definitions</h3>
    <ul>
      <li><strong>Artificial Intelligence (AI)</strong> — a broad field focused on creating
      intelligent systems that can think, reason, learn and make decisions like humans.</li>
      <li><strong>Machine Learning (ML)</strong> — a subset of AI that learns patterns from data
      without being explicitly programmed.</li>
      <li><strong>Deep Learning (DL)</strong> — a subset of ML that uses neural networks with
      multiple layers to learn complex patterns from large amounts of data.</li>
    </ul>

    <h3>5.2 Key Differences</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>AI</th><th>Machine Learning</th><th>Deep Learning</th></tr></thead><tbody>
      <tr><td>Scope</td><td>Broad field</td><td>Subset of AI</td><td>Subset of ML</td></tr>
      <tr><td>Goal</td><td>Create intelligent systems</td><td>Learn from data</td><td>Learn complex patterns via neural networks</td></tr>
      <tr><td>Data requirement</td><td>Varies</td><td>Moderate</td><td>Large amount of data</td></tr>
      <tr><td>Approach</td><td>Rule-based, search, logic, ML</td><td>Statistical learning from data</td><td>Neural networks with multiple layers</td></tr>
      <tr><td>Feature engineering</td><td>Manual / optional</td><td>Often manual</td><td>Automatic feature learning</td></tr>
      <tr><td>Computing power</td><td>Low to high</td><td>Medium</td><td>High (GPU/TPU)</td></tr>
      <tr><td>Examples</td><td>Expert systems, robotics, planning</td><td>Regression, classification</td><td>Image recognition, NLP (Transformers)</td></tr>
    </tbody></table>

    <h3>5.3 Relationship</h3>
    <p>DL ⊂ ML ⊂ AI. All deep learning is machine learning, but not all ML is DL; all ML is AI,
    but not all AI is ML.</p>

    <h3>5.4 Real-World Examples</h3>
    <table class="tbl"><thead><tr><th>Task</th><th>AI</th><th>ML</th><th>Deep Learning</th></tr></thead><tbody>
      <tr><td>Play Chess</td><td>Rule-based AI</td><td>Learn from games</td><td>Deep RL</td></tr>
      <tr><td>Email Spam Detection</td><td>Rule-based</td><td>Naïve Bayes, SVM</td><td>Neural networks</td></tr>
      <tr><td>Image Recognition</td><td>Computer vision techniques</td><td>Traditional ML</td><td>CNN</td></tr>
      <tr><td>Speech Recognition</td><td>Rule-based</td><td>HMM, GMM</td><td>RNN, Transformers</td></tr>
      <tr><td>Language Translation</td><td>Rule-based</td><td>Statistical</td><td>Transformers (BERT, GPT)</td></tr>
      <tr><td>Self-Driving Cars</td><td>Traditional AI</td><td>ML for prediction</td><td>Deep Learning (CNN, LSTM)</td></tr>
      <tr><td>Recommendation Systems</td><td>Rule-based</td><td>Collaborative filtering, MF</td><td>DLRM, Transformers</td></tr>
    </tbody></table>

    <h3>5.5 Machine Learning Workflow</h3>
    <p><strong>Data Collection → Data Preprocessing → Feature Engineering → Train Model →
    Evaluate Model → Prediction / Inference.</strong></p>
    <ul>
      <li>Collect labeled/unlabeled data from various sources.</li>
      <li>Clean data, handle missing values, normalize/standardize.</li>
      <li>Select important features, convert to numeric form, reduce dimensionality.</li>
      <li>Choose an algorithm, train, tune hyper-parameters.</li>
      <li>Evaluate with accuracy, precision, recall, F1-score, cross-validation.</li>
      <li>Use the trained model on new data to make predictions.</li>
    </ul>

    <h3>5.6 Common ML Algorithms</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Algorithms</th><th>Use cases</th></tr></thead><tbody>
      <tr><td>Supervised</td><td>Linear/Logistic Regression, SVM, Decision Tree, Random Forest</td><td>Classification, regression, prediction</td></tr>
      <tr><td>Unsupervised</td><td>K-Means, hierarchical clustering, PCA</td><td>Clustering, dimensionality reduction, pattern discovery</td></tr>
      <tr><td>Semi-Supervised</td><td>Self-training, label propagation</td><td>When labeled data is limited</td></tr>
      <tr><td>Reinforcement</td><td>Q-Learning, Deep Q-Network</td><td>Robotics, games, decision making</td></tr>
    </tbody></table>

    <h3>5.7 Deep Learning Architecture (Neural Network)</h3>
    <ul>
      <li>Layers: Input → Hidden (one or more) → Output.</li>
      <li>Each neuron performs a weighted sum followed by an activation function.</li>
      <li>Learns complex patterns automatically from large data.</li>
      <li>Common in image, speech, NLP and recommendation systems.</li>
    </ul>

    <div class="takeaway"><strong>5.8 Key Takeaways:</strong> AI is the broadest concept; ML is a
    practical approach within AI; DL is a powerful technique within ML. Choose the right approach
    based on data, problem complexity and resources. DL needs large data and high compute.</div>

    <div class="interview"><strong>5.9 Interview Questions:</strong> Difference between AI, ML and
    DL. · When to use ML vs DL? · Common ML algorithms and use cases. · What is a neural network
    and how does it work? · Why does DL need large data? · Real-world examples of AI/ML/DL.</div>
  `
},
{
  n: 6, img: "AI-06.jpg", page: "6 / 20",
  title: "Machine Learning Fundamentals",
  tags: ["supervised", "unsupervised", "reinforcement", "linear regression"],
  html: `
    <div class="grid2">
      <div>
        <h3>6.1 What is Machine Learning?</h3>
        <ul>
          <li>ML is a subset of AI that allows computers to learn patterns from data without being
          explicitly programmed.</li>
          <li>Uses statistical techniques and algorithms to find patterns, make predictions and
          improve performance over time.</li>
          <li>Learns from data and generalizes to new, unseen data.</li>
        </ul>
      </div>
      <div>
        <h3>6.2 Types of Machine Learning</h3>
        <ul>
          <li><strong>Supervised</strong> (labeled data): classification, regression.</li>
          <li><strong>Unsupervised</strong> (unlabeled data): clustering, dimensionality reduction, association rules.</li>
          <li><strong>Reinforcement</strong> (learning by interaction): reward-based learning, trial and error, sequential decisions.</li>
        </ul>
      </div>
    </div>

    <h3>6.3–6.5 The three learning types</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Idea</th><th>Examples</th></tr></thead><tbody>
      <tr><td>Supervised</td><td>Uses labeled data (input + correct output); learns a mapping from inputs to outputs; used for classification and regression.</td><td>Email spam detection, house price prediction, disease prediction</td></tr>
      <tr><td>Unsupervised</td><td>Uses unlabeled data (only inputs); finds hidden patterns/structures.</td><td>Customer segmentation (clustering), data visualization (PCA), market basket analysis</td></tr>
      <tr><td>Reinforcement</td><td>Learns by interacting with an environment; receives rewards/penalties; maximizes cumulative reward.</td><td>Game playing (AlphaGo), robot navigation, self-driving cars</td></tr>
    </tbody></table>
    <p class="note"><strong>Flow:</strong> Supervised — Labeled Data → Training Algorithm → Model →
    Prediction. Unsupervised — Unlabeled Data → Algorithm → Patterns/Clusters. Reinforcement —
    Agent ⇄ Environment via State, Action, Reward.</p>

    <h3>6.6 Common Algorithms</h3>
    <table class="tbl"><thead><tr><th>Learning type</th><th>Algorithms</th><th>Use case</th></tr></thead><tbody>
      <tr><td>Supervised (Classification)</td><td>Logistic Regression, Decision Tree, Random Forest, SVM, KNN</td><td>Spam detection, image classification, fraud detection</td></tr>
      <tr><td>Supervised (Regression)</td><td>Linear Regression, Ridge/Lasso, Decision Tree Regressor, Random Forest Regressor, XGBoost</td><td>House price, sales forecasting, demand/temperature prediction</td></tr>
      <tr><td>Unsupervised</td><td>K-Means, hierarchical clustering, DBSCAN, PCA, t-SNE</td><td>Customer segmentation, anomaly detection, data visualization</td></tr>
      <tr><td>Reinforcement</td><td>Q-Learning, DQN, Policy Gradient, Actor-Critic, PPO</td><td>Game AI, robot control, self-driving cars, resource optimization</td></tr>
    </tbody></table>

    <h3>6.7 Example: Linear Regression</h3>
    <p>A supervised algorithm for regression problems. It models the relationship between input
    (X) and output (y) with a straight line:</p>
    <pre><code>y = mX + b
y = predicted value   X = input feature
m = slope (coefficient)   b = intercept</code></pre>
    <p>The model learns the best-fit line that minimizes the error between predicted and actual values.</p>

    <div class="takeaway"><strong>6.8 Key Takeaways:</strong> ML is a practical, powerful approach
    to build intelligent systems. Choose the learning type based on the problem and data. Supervised
    needs labeled data; unsupervised finds hidden patterns; reinforcement handles sequential decisions.
    Feature engineering and quality data are crucial.</div>

    <div class="interview"><strong>6.9 Interview Questions:</strong> What is ML? · Types of ML with
    examples. · Difference between supervised, unsupervised and reinforcement. · When to use each
    type? · Common algorithms and use cases. · Explain linear regression with an example.</div>
  `
},
{
  n: 7, img: "AI-07.jpg", page: "7 / 20",
  title: "Deep Learning and Neural Networks",
  tags: ["perceptron", "activation", "backprop", "loss", "optimizers"],
  html: `
    <div class="grid2">
      <div>
        <h3>7.1 What is Deep Learning?</h3>
        <ul>
          <li>A subset of ML using neural networks with multiple layers to learn complex patterns
          from large amounts of data.</li>
          <li>Automatically learns features from raw data (images, text, audio).</li>
          <li>Inspired by the structure and function of the human brain (neurons).</li>
          <li>Very effective for unstructured data; achieves state-of-the-art results in many domains.</li>
        </ul>
      </div>
      <div>
        <h3>7.2 Artificial Neuron (Perceptron)</h3>
        <p>Weighted sum: <code>z = Σ(wᵢ·xᵢ) + b</code>, then an activation function <code>f(z)</code>
        produces the output <code>y</code>.</p>
        <ul>
          <li>Each input is multiplied by a weight; weights are summed and bias is added.</li>
          <li>Activation function introduces non-linearity.</li>
          <li>Output is passed to the next layer.</li>
        </ul>
      </div>
    </div>

    <h3>7.3 Structure of a Neural Network</h3>
    <ul>
      <li><strong>Input layer</strong> — receives input features (pixels, text embeddings).</li>
      <li><strong>Hidden layers</strong> — multiple layers of neurons to learn hierarchical features.</li>
      <li><strong>Output layer</strong> — produces the final output (classification, regression, etc.).</li>
      <li>Each neuron connects to neurons in the next layer with weights.</li>
    </ul>

    <h3>7.4 Common Activation Functions</h3>
    <table class="tbl"><thead><tr><th>Function</th><th>Formula</th><th>Notes</th></tr></thead><tbody>
      <tr><td>Sigmoid</td><td>f(x)=1/(1+e⁻ˣ)</td><td>Output (0,1); used in binary classification</td></tr>
      <tr><td>Tanh</td><td>f(x)=(eˣ−e⁻ˣ)/(eˣ+e⁻ˣ)</td><td>Output (−1,1); zero-centered</td></tr>
      <tr><td>ReLU</td><td>f(x)=max(0,x)</td><td>Most popular; helps with vanishing gradient</td></tr>
      <tr><td>Leaky ReLU</td><td>f(x)=max(αx,x)</td><td>Small slope for negatives; solves dying ReLU</td></tr>
      <tr><td>Softmax</td><td>f(xᵢ)=eˣⁱ/Σeˣʲ</td><td>Converts outputs to probabilities; multi-class classification</td></tr>
    </tbody></table>

    <h3>7.5 Forward Propagation</h3>
    <p>Input flows through the network layer by layer. At each layer: <code>z = WX + b</code>, then
    activation <code>f(z)</code>; the output of one layer is the input to the next, producing the
    final prediction.</p>

    <h3>7.6 Loss Function (Cost Function)</h3>
    <p>Measures the difference between predicted and actual output; used to update weights during training.</p>
    <table class="tbl"><thead><tr><th>Problem type</th><th>Loss function</th></tr></thead><tbody>
      <tr><td>Regression</td><td>Mean Squared Error (MSE)</td></tr>
      <tr><td>Binary Classification</td><td>Binary Cross Entropy</td></tr>
      <tr><td>Multi-class Classification</td><td>Categorical Cross Entropy</td></tr>
    </tbody></table>

    <h3>7.7 Backpropagation</h3>
    <ul>
      <li>Algorithm to update weights and biases based on the error (loss).</li>
      <li>Uses the chain rule of calculus to compute gradients.</li>
      <li>Gradients show how much each weight contributed to the error.</li>
      <li>Weights updated via an optimizer (e.g. gradient descent): Compute Loss → Calculate
      Gradients → Update Weights <code>W = W − η∇W</code> → Repeat for many epochs.</li>
    </ul>

    <h3>7.8 Training Process &amp; Optimizers</h3>
    <ol>
      <li>Prepare and preprocess data (train/validation/test).</li>
      <li>Initialize model with random weights.</li>
      <li>Forward pass → compute predictions.</li>
      <li>Calculate loss.</li>
      <li>Backpropagation → compute gradients.</li>
      <li>Update weights using an optimizer (SGD, Adam).</li>
      <li>Repeat until convergence.</li>
    </ol>
    <p><strong>Optimizers:</strong> SGD, Momentum, RMSprop, Adam, AdamW.</p>

    <div class="takeaway"><strong>7.9 Key Takeaways:</strong> DL uses neural networks with multiple
    layers; activation functions add non-linearity; backprop learns optimal weights; needs large
    data and high compute (GPU/TPU). Widely used in CV, NLP, speech and more.</div>

    <div class="interview"><strong>7.10 Interview Questions:</strong> What is a neural network and
    how does it work? · Explain activation functions with graphs. · What is backpropagation? ·
    Difference between ReLU and Leaky ReLU. · Common loss functions and when to use them. · What
    optimizers are used in deep learning?</div>
  `
},
{
  n: 8, img: "AI-08.jpg", page: "8 / 20",
  title: "Natural Language Processing (NLP)",
  tags: ["nlp", "tokenization", "embeddings", "transformers", "bert gpt"],
  html: `
    <div class="grid2">
      <div>
        <h3>8.1 What is NLP?</h3>
        <ul>
          <li>A branch of AI that helps computers understand, process and generate human language
          (text or speech).</li>
          <li>Combines linguistics, machine learning and deep learning.</li>
          <li>Enables machines to grasp meaning, context and intent.</li>
          <li>Used in chatbots, search engines, translation, summarization, sentiment analysis and more.</li>
        </ul>
      </div>
      <div>
        <h3>8.2 NLP Pipeline</h3>
        <p><strong>Raw Text → Text Preprocessing → Tokenization → Vector Representation
        (Embeddings) → Model (Transformer / LLM) → Output (Tasks).</strong></p>
      </div>
    </div>

    <h3>8.3 Text Preprocessing</h3>
    <ul>
      <li>Convert to lowercase; remove punctuation and special characters.</li>
      <li>Remove stop words (a, the, is, etc.).</li>
      <li>Stemming (playing → play) and lemmatization (better, best → good).</li>
    </ul>
    <p class="note"><strong>Example:</strong> “The cats are Playing!” → lowercase “the cats are
    playing” → remove stop words “cats playing” → stemming “cat play” → lemmatization “cat playing”.</p>

    <h3>8.4 Tokenization</h3>
    <ul>
      <li>Splits text into smaller units called tokens (words, subwords or characters).</li>
      <li>Methods: Word tokenization, Subword tokenization (BPE, WordPiece), Character tokenization.</li>
    </ul>

    <h3>8.5 Text Representation (Embeddings)</h3>
    <ul>
      <li>Text is converted into vector representations (embeddings) because computers work with numbers.</li>
      <li>Embeddings capture semantic meaning; similar words have similar vectors.</li>
      <li>Common: Word2Vec, GloVe, FastText, BERT embeddings, OpenAI embeddings.</li>
    </ul>

    <h3>8.6 Bag of Words vs Word Embeddings</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>Bag of Words</th><th>Word Embeddings</th></tr></thead><tbody>
      <tr><td>Representation</td><td>Sparse vector (word count)</td><td>Dense vector (continuous)</td></tr>
      <tr><td>Context</td><td>Does not capture context</td><td>Captures semantic meaning</td></tr>
      <tr><td>Vocabulary</td><td>High dimensional</td><td>Low dimensional (e.g. 300)</td></tr>
      <tr><td>Similarity</td><td>Cannot capture similarity</td><td>Similar words have similar vectors</td></tr>
    </tbody></table>

    <h3>8.7 Transformer Architecture</h3>
    <ul>
      <li>Transformers use self-attention to understand the context of words in a sequence.</li>
      <li>Process long sequences and are highly parallelizable.</li>
      <li>Examples: BERT (encoder), GPT (decoder), T5 (encoder-decoder).</li>
    </ul>

    <h3>8.8 BERT vs GPT</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>BERT</th><th>GPT</th></tr></thead><tbody>
      <tr><td>Architecture</td><td>Encoder only</td><td>Decoder only</td></tr>
      <tr><td>Training objective</td><td>Masked language modeling</td><td>Next-token prediction</td></tr>
      <tr><td>Direction</td><td>Bidirectional (past &amp; future)</td><td>Unidirectional (past only)</td></tr>
      <tr><td>Best for</td><td>Understanding text (NLP tasks)</td><td>Text generation</td></tr>
      <tr><td>Examples</td><td>BERT, RoBERTa, ALBERT</td><td>GPT-3, GPT-4, LLaMA, Mistral</td></tr>
    </tbody></table>

    <h3>8.9 Common NLP Tasks</h3>
    <table class="tbl"><thead><tr><th>Task</th><th>Description</th><th>Examples</th></tr></thead><tbody>
      <tr><td>Text Classification</td><td>Assign a category to text</td><td>Spam detection, sentiment analysis</td></tr>
      <tr><td>Named Entity Recognition</td><td>Identify entities in text</td><td>Person, location, org</td></tr>
      <tr><td>Machine Translation</td><td>Translate to another language</td><td>Google Translate</td></tr>
      <tr><td>Text Summarization</td><td>Generate a short summary</td><td>News summarization</td></tr>
      <tr><td>Question Answering</td><td>Answer questions from text</td><td>ChatGPT, FAQ bots</td></tr>
      <tr><td>Text Generation</td><td>Generate human-like text</td><td>Chatbots, content creation</td></tr>
    </tbody></table>

    <div class="takeaway"><strong>8.11 Key Takeaways:</strong> NLP helps machines understand and
    generate human language. Preprocessing and tokenization matter. Embeddings convert text into
    meaningful vectors. Transformers (BERT, GPT) are state of the art. Choose the model based on the
    task (understanding vs generation). LLMs like GPT-4 and LLaMA are powerful tools.</div>
  `
},
{
  n: 9, img: "AI-09.jpg", page: "9 / 20",
  title: "Computer Vision",
  tags: ["cv", "cnn", "yolo", "segmentation"],
  html: `
    <div class="grid2">
      <div>
        <h3>9.1 What is Computer Vision?</h3>
        <ul>
          <li>A branch of AI that enables computers to understand, interpret and process visual
          information (images and videos).</li>
          <li>Uses image processing, machine learning and deep learning.</li>
          <li>Goals: detect objects, recognize patterns, understand scenes, make decisions from visual data.</li>
          <li>Used in self-driving cars, face recognition, medical imaging, surveillance, document processing.</li>
        </ul>
      </div>
      <div>
        <h3>9.2 Computer Vision Pipeline</h3>
        <p><strong>Image / Video Input → Preprocessing → Feature Extraction → Model (CNN) →
        Output (Prediction).</strong> Features are learned automatically by CNN layers; outputs
        include labels, bounding boxes, masks, keypoints.</p>
      </div>
    </div>

    <h3>9.3 Types of Computer Vision Tasks</h3>
    <table class="tbl"><thead><tr><th>Task</th><th>Description</th><th>Applications</th></tr></thead><tbody>
      <tr><td>Image Classification</td><td>Assign a single label to an image</td><td>Cat vs dog, disease detection</td></tr>
      <tr><td>Object Detection</td><td>Detect and locate multiple objects with bounding boxes</td><td>People, cars, faces in an image</td></tr>
      <tr><td>Image Segmentation</td><td>Classify each pixel in the image</td><td>Medical image analysis, autonomous driving</td></tr>
      <tr><td>Object Tracking</td><td>Track objects across video frames</td><td>Surveillance, sports analytics</td></tr>
      <tr><td>Image Generation</td><td>Generate new images</td><td>GANs, diffusion models</td></tr>
      <tr><td>Pose Estimation</td><td>Detect keypoints (body joints)</td><td>Human pose, action recognition</td></tr>
      <tr><td>Image Captioning</td><td>Generate text description</td><td>Auto image description (e.g. BLIP)</td></tr>
    </tbody></table>

    <h3>9.4 Image Processing Basics</h3>
    <p>Improves image quality and prepares data for training. Common operations: resize
    (e.g. 224×224), grayscale conversion, noise removal (blur, Gaussian filter), edge detection
    (Sobel, Canny), histogram equalization, normalization (scale pixels to 0–1).</p>

    <h3>9.5 Convolutional Neural Networks (CNN)</h3>
    <ul>
      <li>A deep learning architecture designed for image data.</li>
      <li>Automatically learns spatial features using convolutional layers.</li>
      <li>Common layers: Convolution → ReLU → Pooling → Fully Connected.</li>
      <li>Flow: Input Image → Convolution (feature maps) → ReLU → Pooling (downsampling) → Fully
      Connected → classification.</li>
    </ul>

    <h3>9.6 Common CNN Architectures</h3>
    <table class="tbl"><thead><tr><th>Model</th><th>Key features</th><th>Use cases</th></tr></thead><tbody>
      <tr><td>LeNet</td><td>Early CNN model</td><td>Digit recognition (MNIST)</td></tr>
      <tr><td>AlexNet</td><td>Deeper network, ReLU</td><td>Image classification</td></tr>
      <tr><td>VGG</td><td>Simple and deep (16/19 layers)</td><td>Image classification</td></tr>
      <tr><td>ResNet</td><td>Residual connections (solves vanishing gradient)</td><td>General purpose, high accuracy</td></tr>
      <tr><td>Inception (GoogLeNet)</td><td>Multiple filter sizes</td><td>Image classification</td></tr>
      <tr><td>MobileNet</td><td>Lightweight (for mobile)</td><td>Mobile and edge devices</td></tr>
      <tr><td>EfficientNet</td><td>Scales depth, width, resolution</td><td>High accuracy, fewer params</td></tr>
      <tr><td>YOLO</td><td>Real-time object detection</td><td>Real-time detection (videos)</td></tr>
    </tbody></table>

    <h3>9.7 Object Detection (YOLO)</h3>
    <p>Object detection identifies and locates multiple objects using bounding boxes and class
    labels. YOLO (You Only Look Once) is a popular real-time detector: Input Image → YOLO Model →
    Output (bounding boxes).</p>

    <h3>9.8 Image Segmentation</h3>
    <p>Classifies each pixel into a category. Used in medical imaging, autonomous driving,
    satellite images. Popular models: U-Net, SegNet, DeepLab, Mask R-CNN.</p>

    <div class="takeaway"><strong>9.10 Key Takeaways:</strong> CV enables machines to understand
    visual data. CNNs are the core deep learning models for images. Different architectures suit
    different tasks (classification, detection, segmentation). CV has wide real-world applications
    across industries.</div>
  `
},
{
  n: 10, img: "AI-10.jpg", page: "10 / 20",
  title: "Generative AI and Large Language Models (LLMs)",
  tags: ["genai", "llm", "transformer", "self-attention", "decoding"],
  html: `
    <div class="grid2">
      <div>
        <h3>10.1 What is Generative AI?</h3>
        <ul>
          <li>AI models that can generate new content — text, images, code, audio, video — from
          learned patterns in training data.</li>
          <li>LLMs are a type of generative AI trained on massive text data to understand and
          generate human-like text.</li>
          <li>They learn the probability distribution of the next token in a sequence.</li>
          <li>Examples: GPT (OpenAI), LLaMA (Meta), Claude (Anthropic), Gemini (Google).</li>
        </ul>
      </div>
      <div>
        <h3>10.2 How LLMs Work</h3>
        <p><strong>Training (Pretraining):</strong> Large Text Data → Tokenization → Transformer
        Model → train with self-supervised learning (next-token prediction) → Trained LLM (weights).</p>
        <p><strong>Inference (Generation):</strong> User Prompt → Tokenization → Trained LLM →
        generate next token repeatedly (using probabilities) → Output Text.</p>
      </div>
    </div>

    <h3>10.3 Transformer Architecture (Overview)</h3>
    <p>Input Text → Tokenization → Token Embeddings + Positional Encoding → Transformer Block
    (×N: Multi-Head Attention → Add &amp; Norm → Feed Forward → Add &amp; Norm) → Next-Token Probabilities.</p>

    <h3>10.4 Key Components</h3>
    <table class="tbl"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody>
      <tr><td>Tokenization</td><td>Convert text into smaller units (tokens). Examples: BPE, WordPiece, SentencePiece</td></tr>
      <tr><td>Token Embeddings</td><td>Convert tokens into dense vector representations</td></tr>
      <tr><td>Positional Encoding</td><td>Adds information about token position in a sequence</td></tr>
      <tr><td>Self-Attention</td><td>Helps the model understand relationships between tokens</td></tr>
      <tr><td>Multi-Head Attention</td><td>Multiple attention heads learn different patterns in parallel</td></tr>
      <tr><td>Feed Forward Network</td><td>Two linear layers with activation (ReLU/GELU)</td></tr>
      <tr><td>Layer Normalization</td><td>Stabilizes and improves training</td></tr>
      <tr><td>Decoder (for LLMs)</td><td>Generates text autoregressively (one token at a time)</td></tr>
    </tbody></table>

    <h3>10.5 Self-Attention (Intuition)</h3>
    <p>Lets every token look at all other tokens and decide which are important. It computes a
    weighted sum of token representations using <strong>Query (Q)</strong>, <strong>Key (K)</strong>
    and <strong>Value (V)</strong> vectors: Attention Scores (Q·Kᵀ) → Softmax → Weighted Sum → result.</p>

    <h3>10.7 Text Generation (Next-Token Prediction) &amp; Decoding</h3>
    <ul>
      <li>LLMs predict the next token based on previous tokens, using a probability distribution
      over the vocabulary.</li>
      <li><strong>Greedy search</strong> — always choose the highest-probability token.</li>
      <li><strong>Beam search</strong> — keep top-k sequences.</li>
      <li><strong>Sampling</strong> — randomly sample based on probabilities.</li>
      <li><strong>Temperature</strong> — controls randomness (low = deterministic, high = creative).</li>
      <li><strong>Top-k / Top-p (nucleus) sampling</strong> — sample from the top tokens.</li>
    </ul>

    <h3>10.8 Popular LLM Models</h3>
    <table class="tbl"><thead><tr><th>Model</th><th>Organization</th><th>Key features</th><th>Use cases</th></tr></thead><tbody>
      <tr><td>GPT-4 / GPT-3.5</td><td>OpenAI</td><td>High performance, multimodal (GPT-4)</td><td>Chatbots, coding, content generation</td></tr>
      <tr><td>LLaMA</td><td>Meta</td><td>Open source, efficient models</td><td>Research, fine-tuning, custom apps</td></tr>
      <tr><td>Claude</td><td>Anthropic</td><td>Focus on safety and helpfulness</td><td>Chat, summarization, enterprise use</td></tr>
      <tr><td>Gemini</td><td>Google</td><td>Multimodal (text, image, video)</td><td>Search, reasoning, multimodal apps</td></tr>
      <tr><td>Mistral</td><td>Mistral AI</td><td>Efficient, open models</td><td>Research, production use</td></tr>
    </tbody></table>

    <h3>10.10 Advantages and Limitations</h3>
    <div class="grid2">
      <div><h4>Advantages</h4><ul>
        <li>Understand and generate human-like text</li>
        <li>Work across a wide range of tasks (few-shot learning)</li>
        <li>Large knowledge base from training data</li>
        <li>Can be fine-tuned for specific domains</li>
        <li>Multimodal capabilities (in latest models)</li>
      </ul></div>
      <div><h4>Limitations</h4><ul>
        <li>Can generate incorrect or biased information</li>
        <li>No real-time knowledge (needs tools)</li>
        <li>Computationally expensive to train</li>
        <li>Require large amounts of data</li>
        <li>Can be misused; may struggle with complex reasoning</li>
      </ul></div>
    </div>

    <div class="takeaway"><strong>10.11 Key Takeaways:</strong> Generative AI creates new content
    from learned patterns. LLMs are based on the Transformer architecture. Tokenization,
    self-attention and next-token prediction are key concepts. LLMs can be fine-tuned and used with
    techniques like RAG. Choose the right model and decoding strategy for the use case.</div>
  `
},
{
  n: 11, img: "AI-11.jpg", page: "11 / 20",
  title: "Prompt Engineering",
  tags: ["prompt", "cot", "few-shot", "structured output"],
  html: `
    <div class="grid2">
      <div>
        <h3>11.1 What is Prompt Engineering?</h3>
        <ul>
          <li>The art and science of designing effective inputs (prompts) to get the best response
          from LLMs.</li>
          <li>Involves structuring instructions, context, examples and constraints to guide the model.</li>
          <li>Good prompts help get accurate, relevant, safe and structured outputs.</li>
          <li>Essential for building chatbots, content generation, code generation, data extraction, etc.</li>
        </ul>
      </div>
      <div>
        <h3>11.2 Why It's Important</h3>
        <ul>
          <li>Improves response quality · reduces hallucinations</li>
          <li>Helps control model behavior · enables domain-specific outputs</li>
          <li>Saves development time and cost</li>
          <li>Works across different LLMs (GPT, Claude, Gemini, LLaMA)</li>
          <li>Crucial for reliable AI applications</li>
        </ul>
      </div>
    </div>

    <h3>11.3 Anatomy of a Good Prompt</h3>
    <table class="tbl"><thead><tr><th>Part</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Role</td><td>Define the role of the model (e.g. “You are a helpful assistant”)</td></tr>
      <tr><td>Context</td><td>Provide background information</td></tr>
      <tr><td>Instruction</td><td>Clearly state what to do</td></tr>
      <tr><td>Input Data</td><td>Provide the actual data / question</td></tr>
      <tr><td>Constraints</td><td>Specify format, length, tone, etc.</td></tr>
      <tr><td>Output Format</td><td>Mention the desired output structure</td></tr>
    </tbody></table>

    <h3>11.6 Zero-Shot, One-Shot &amp; Few-Shot Learning</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Idea</th></tr></thead><tbody>
      <tr><td>Zero-Shot (no examples)</td><td>Model performs the task without any examples; useful for simple, well-known tasks.</td></tr>
      <tr><td>One-Shot (1 example)</td><td>Model is given one example of the task; helps understanding.</td></tr>
      <tr><td>Few-Shot (multiple examples)</td><td>Model is given multiple examples; useful for complex or domain-specific tasks.</td></tr>
    </tbody></table>

    <h3>11.7 Chain-of-Thought (CoT) Prompting</h3>
    <p>Encourages the model to think step by step before giving the final answer. Helps with complex
    reasoning and mathematical problems; useful for coding, logic, analysis and multi-step tasks.
    Example — “Solve this problem step by step. If a train travels 120 km in 2 hours, what is its
    speed?” → Step 1 distance = 120 km → Step 2 time = 2 hours → Step 3 speed = 120/2 = 60 km/h.</p>

    <h3>11.8 Advanced Prompting Techniques</h3>
    <table class="tbl"><thead><tr><th>Technique</th><th>Description</th></tr></thead><tbody>
      <tr><td>Role Prompting</td><td>Assign a specific role (expert, teacher, developer)</td></tr>
      <tr><td>Contextual Prompting</td><td>Provide relevant background information</td></tr>
      <tr><td>Instruction Prompting</td><td>Clearly define the task</td></tr>
      <tr><td>Chain-of-Thought (CoT)</td><td>Ask the model to think step by step</td></tr>
      <tr><td>Self-Consistency</td><td>Generate multiple outputs and choose the best</td></tr>
      <tr><td>Tree-of-Thought (ToT)</td><td>Explore multiple reasoning paths</td></tr>
      <tr><td>Retrieval-Augmented Generation (RAG)</td><td>Provide external knowledge (documents)</td></tr>
      <tr><td>Structured Output</td><td>Ask for JSON, table, bullet points, etc.</td></tr>
      <tr><td>Iterative Prompting</td><td>Refine the prompt based on previous output</td></tr>
    </tbody></table>

    <h3>11.9 Structured Output Example</h3>
    <p>Ask the model to return output in a specific format like JSON, table or markdown — useful
    for integrating LLMs with applications.</p>
    <pre><code>Prompt: Extract the name, age and city and return JSON.
Text: "My name is Rahul, I am 28 years old and I live in Delhi."

{ "name": "Rahul", "age": 28, "city": "Delhi" }</code></pre>

    <div class="grid2">
      <div><h4>11.10 Best Practices ✅</h4><ul>
        <li>Be clear and specific in instructions</li>
        <li>Provide sufficient context; use examples for complex tasks</li>
        <li>Specify the desired output format; set constraints (length, tone, style)</li>
        <li>Iterate and refine; use CoT for reasoning</li>
        <li>Avoid ambiguous prompts; test with different models; validate output</li>
      </ul></div>
      <div><h4>11.11 Common Mistakes ❌</h4><ul>
        <li>Vague or unclear instructions; no context or missing details</li>
        <li>Expecting too much in one prompt; not specifying output format</li>
        <li>Ignoring token limits; biased or leading questions</li>
        <li>Not validating output; over-reliance without evaluation</li>
        <li>Not handling edge cases</li>
      </ul></div>
    </div>

    <div class="takeaway"><strong>11.13 Key Takeaways:</strong> Prompt engineering is a key skill
    for working with LLMs. A well-structured prompt improves quality and reliability. Techniques like
    few-shot, CoT and structured output help in complex tasks. Always iterate, test and validate.</div>
  `
},
{
  n: 12, img: "AI-12.jpg", page: "12 / 20",
  title: "Retrieval-Augmented Generation (RAG)",
  tags: ["rag", "chunking", "embeddings", "vector db", "similarity search"],
  html: `
    <div class="grid2">
      <div>
        <h3>12.1 What is RAG?</h3>
        <ul>
          <li>Combines retrieval (from external data) with generation (using an LLM).</li>
          <li>Helps LLMs use your private or up-to-date data to generate accurate, grounded responses.</li>
          <li>Reduces hallucinations and improves answer quality by providing relevant context.</li>
          <li>Used in chatbots, enterprise search, document Q&amp;A, knowledge management and more.</li>
        </ul>
      </div>
      <div>
        <h3>12.2 RAG Architecture (High Level)</h3>
        <p><strong>1. Ingestion (Indexing):</strong> Documents → Chunking → Embeddings → Vector
        Database.</p>
        <p><strong>2. Retrieval + Generation (Query time):</strong> User Query → Query Embedding →
        Similarity Search (top-K) → Relevant Context → LLM → Final Response.</p>
      </div>
    </div>

    <h3>12.3 RAG vs Fine-Tuning</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>RAG</th><th>Fine-Tuning</th></tr></thead><tbody>
      <tr><td>Data update</td><td>No retraining needed</td><td>Requires retraining</td></tr>
      <tr><td>Use case</td><td>Dynamic, external data</td><td>Task-specific behavior</td></tr>
      <tr><td>Cost</td><td>Lower (no training)</td><td>Higher (training cost)</td></tr>
      <tr><td>Implementation</td><td>Faster and easier</td><td>Complex and time consuming</td></tr>
      <tr><td>Hallucination</td><td>Reduced (uses real data)</td><td>May still hallucinate</td></tr>
      <tr><td>Best for</td><td>Knowledge lookup, Q&amp;A</td><td>Domain adaptation, style</td></tr>
    </tbody></table>

    <h3>12.4 Document Ingestion</h3>
    <ol>
      <li>Load documents (PDF, TXT, DOCX, HTML).</li>
      <li>Extract text (PyPDF2, Unstructured, LangChain).</li>
      <li>Clean text (remove headers, footers, noise).</li>
      <li>Split into chunks (fixed size or semantic chunking).</li>
      <li>Generate embeddings (OpenAI, BGE, SentenceTransformers).</li>
      <li>Store in a vector database (FAISS, Pinecone, Qdrant).</li>
    </ol>

    <h3>12.5 Chunking Strategies</h3>
    <ul>
      <li><strong>Fixed Size</strong> — split by number of characters or tokens.</li>
      <li><strong>Recursive</strong> — split using document structure (headings).</li>
      <li><strong>Semantic</strong> — split based on meaning using embeddings.</li>
      <li><strong>Sliding Window</strong> — overlapping chunks to maintain context.</li>
    </ul>

    <h3>12.7 Vector Databases &amp; 12.8 Similarity Search</h3>
    <p>Vector databases store and search embeddings efficiently. Popular: FAISS (Meta), Pinecone,
    Qdrant, Weaviate, Milvus, Chroma. Similarity metrics: <strong>Cosine similarity</strong> (most
    popular), Euclidean distance, dot product. Retrieve the top relevant chunks and pass them to the
    LLM as context.</p>

    <h3>12.10 RAG Example (LangChain)</h3>
    <pre><code>from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS

# 1. Load document
loader = PyPDFLoader("document.pdf")
docs = loader.load()

# 2. Split into chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)

# 3. Create embeddings and store in vector DB
embeddings = OpenAIEmbeddings()
vector_db = FAISS.from_documents(chunks, embeddings)

# 4. Retrieve and generate answer
retriever = vector_db.as_retriever(search_kwargs={"k": 4})
qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
response = qa_chain.run("What is RAG?")
print(response)</code></pre>

    <div class="grid2">
      <div><h4>12.12 Best Practices ✅</h4><ul>
        <li>Use a good chunking strategy (semantic or recursive)</li>
        <li>Choose the right embedding model; use metadata</li>
        <li>Optimize chunk size and overlap</li>
        <li>Use hybrid search (keyword + vector) and re-ranking</li>
        <li>Prompt the LLM to cite sources; monitor and evaluate</li>
      </ul></div>
      <div><h4>12.13 Challenges ❌</h4><ul>
        <li>Retrieval quality depends on chunking and embeddings</li>
        <li>Handling large documents can be expensive</li>
        <li>Latency from retrieval + LLM inference</li>
        <li>Not always 100% accurate; requires infrastructure</li>
        <li>Keeping data up to date; handling noisy documents</li>
      </ul></div>
    </div>

    <div class="takeaway"><strong>12.14 Key Takeaways:</strong> RAG combines retrieval and
    generation for better, grounded answers. Easy to implement and widely used. Good data prep,
    chunking and embeddings are key. RAG significantly reduces hallucinations and improves quality.</div>
  `
},
{
  n: 13, img: "AI-13.jpg", page: "13 / 20",
  title: "AI Agents and Agentic AI",
  tags: ["agents", "agentic", "tool calling", "memory", "multi-agent"],
  html: `
    <div class="grid2">
      <div>
        <h3>13.1 What are AI Agents?</h3>
        <ul>
          <li>Autonomous systems that understand goals, plan steps, use tools, take actions and learn
          from feedback to complete tasks.</li>
          <li>Interact with the real world using tools (APIs, databases, web, files).</li>
          <li>A more advanced form of LLMs with reasoning, planning and memory.</li>
          <li><strong>Agentic AI</strong> = systems where agents work independently to achieve complex
          goals with minimal human intervention.</li>
        </ul>
      </div>
      <div>
        <h3>13.2 Key Characteristics</h3>
        <ul>
          <li>Autonomy · Goal-oriented · Planning</li>
          <li>Tool use · Memory · Reasoning</li>
          <li>Adaptability (learns from feedback)</li>
          <li>Multi-agent collaboration</li>
        </ul>
      </div>
    </div>

    <h3>13.3 LLM vs AI Agent vs Agentic AI</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>LLM</th><th>AI Agent</th><th>Agentic AI</th></tr></thead><tbody>
      <tr><td>Definition</td><td>Predicts next token</td><td>Uses LLM + tools to take actions</td><td>Multiple agents working towards complex goals</td></tr>
      <tr><td>Capability</td><td>Text generation</td><td>Reasoning + task execution</td><td>Autonomous, collaborative, self-improving</td></tr>
      <tr><td>Tools</td><td>No</td><td>Yes (APIs, DB, etc.)</td><td>Yes (advanced)</td></tr>
      <tr><td>Memory</td><td>Limited (context window)</td><td>Short/long-term memory</td><td>Persistent memory (across sessions)</td></tr>
      <tr><td>Use case</td><td>Q&amp;A, content generation</td><td>Task automation (support, research)</td><td>Complex workflows (multi-agent)</td></tr>
    </tbody></table>

    <h3>13.4 Agent Architecture (High Level)</h3>
    <p>User Goal → <strong>Agent Core</strong> (Planning + Memory [short + long term] + LLM for
    reasoning/decisions) → Tool Calling (APIs, DB, Web, Code) → Action Execution → Final Response.
    External tools: web search, database, file system, APIs (REST, GraphQL), code execution.</p>

    <h3>13.5 Agent Execution Loop</h3>
    <ol>
      <li>Understand goal — analyze the user query and intent.</li>
      <li>Plan — break the task into smaller steps.</li>
      <li>Select tools — decide which tools to use for each step.</li>
      <li>Execute — call tools, get results, observe output.</li>
      <li>Reflect / iterate — analyze and decide the next action (continue, retry).</li>
      <li>Finish — generate the final response. (Repeat until the goal is achieved.)</li>
    </ol>

    <h3>13.6 Types of AI Agents</h3>
    <table class="tbl"><thead><tr><th>Agent</th><th>Behavior</th></tr></thead><tbody>
      <tr><td>Simple Reflex</td><td>Responds based on current input only; no memory</td></tr>
      <tr><td>Model-Based</td><td>Maintains internal state (memory); takes past info into account</td></tr>
      <tr><td>Goal-Based</td><td>Plans actions to achieve a specific goal; uses reasoning and search</td></tr>
      <tr><td>Utility-Based</td><td>Chooses actions that maximize utility (best outcome); handles trade-offs</td></tr>
      <tr><td>Learning</td><td>Improves over time from feedback and experience</td></tr>
      <tr><td>Multi-Agent</td><td>Multiple agents collaborate; each has a specific role</td></tr>
    </tbody></table>

    <h3>13.7 Memory in AI Agents</h3>
    <table class="tbl"><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody>
      <tr><td>Short Term</td><td>Stores recent conversation context (within session)</td><td>Last few messages</td></tr>
      <tr><td>Long Term</td><td>Stores important info across sessions</td><td>User preferences, past tasks</td></tr>
      <tr><td>External</td><td>Uses database or vector DB to store/retrieve</td><td>RAG, knowledge base, documents</td></tr>
    </tbody></table>

    <h3>13.9 Multi-Agent System</h3>
    <p>User Goal → Coordinator Agent (Planner) → specialized agents: Research Agent (search &amp;
    gather), Analysis Agent (analyze &amp; reason), Writing Agent (generate content) → Final Output.</p>

    <div class="takeaway"><strong>13.13 Key Takeaways:</strong> AI agents go beyond text generation
    to take real actions using planning, memory, tools and reasoning. Agentic AI enables autonomous,
    collaborative agents. With proper design and guardrails, agents can solve complex tasks.</div>
  `
},
{
  n: 14, img: "AI-14.jpg", page: "14 / 20",
  title: "AI Tools and Frameworks",
  tags: ["langchain", "llamaindex", "huggingface", "vector db", "ecosystem"],
  html: `
    <div class="grid2">
      <div>
        <h3>14.1 Overview</h3>
        <ul>
          <li>Tools and frameworks help developers build, train, fine-tune and deploy AI applications easily.</li>
          <li>Provide prebuilt components for LLMs, embeddings, vector databases and more.</li>
          <li>Save time, reduce complexity and improve productivity.</li>
          <li>The ecosystem is rapidly evolving with open-source and commercial solutions.</li>
        </ul>
      </div>
      <div>
        <h3>14.2 Development Ecosystem</h3>
        <p>Applications &amp; AI Agents → Frameworks (LangChain, LlamaIndex, Agent SDKs) &amp; Model
        APIs (OpenAI, Claude, Gemini, Llama) → Vector Databases + Data Sources → Infrastructure &amp;
        Deployment (Cloud, Docker, Kubernetes, monitoring).</p>
      </div>
    </div>

    <h3>14.3 Popular Tools by Category</h3>
    <table class="tbl"><thead><tr><th>Category</th><th>Tools</th></tr></thead><tbody>
      <tr><td>LLM Frameworks</td><td>LangChain, LlamaIndex, Haystack</td></tr>
      <tr><td>Model APIs</td><td>OpenAI, Claude, Gemini, Together AI</td></tr>
      <tr><td>Vector Databases</td><td>Pinecone, Qdrant, Weaviate, Chroma</td></tr>
      <tr><td>Agent Frameworks</td><td>LangChain Agents, CrewAI, AutoGen</td></tr>
      <tr><td>Orchestration</td><td>LlamaIndex, LangGraph, n8n</td></tr>
      <tr><td>UI / App Development</td><td>Streamlit, Gradio, FastAPI, React</td></tr>
      <tr><td>Data Processing</td><td>Unstructured, LangChain document loaders, PyPDF2</td></tr>
      <tr><td>Evaluation</td><td>RAGAS, LangSmith, Phoenix</td></tr>
      <tr><td>Deployment</td><td>Docker, Kubernetes, AWS, GCP, Vercel</td></tr>
    </tbody></table>

    <h3>14.4 LangChain</h3>
    <ul>
      <li>Popular framework to build LLM applications, chains and agents.</li>
      <li>Provides abstractions for models, prompts, tools, memory and vector stores.</li>
      <li>Supports multiple LLMs and integrations (OpenAI, Anthropic).</li>
    </ul>
    <pre><code>from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
prompt = ChatPromptTemplate.from_template(
    "You are a helpful assistant. Question: {question}")
chain = prompt | llm
response = chain.invoke({"question": "What is RAG?"})
print(response.content)</code></pre>

    <h3>14.6 LlamaIndex</h3>
    <ul>
      <li>Framework focused on connecting LLMs with your private data; excellent for RAG applications.</li>
      <li>Provides data ingestion, indexing, query engines and agents.</li>
      <li>Supports multiple vector databases and LLMs.</li>
    </ul>
    <pre><code>from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

documents = SimpleDirectoryReader("data/").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()
response = query_engine.query("What is AI?")
print(response)</code></pre>

    <h3>14.8 Model APIs &amp; 14.9 Hugging Face</h3>
    <table class="tbl"><thead><tr><th>Provider</th><th>Model examples</th><th>Key features</th></tr></thead><tbody>
      <tr><td>OpenAI</td><td>GPT-4o, GPT-4o-mini</td><td>High quality, multimodal</td></tr>
      <tr><td>Anthropic</td><td>Claude 3.5</td><td>Safer, long context</td></tr>
      <tr><td>Google</td><td>Gemini 1.5</td><td>Multimodal, large context</td></tr>
      <tr><td>Meta</td><td>Llama 3 (open source)</td><td>Open source, self-hosted</td></tr>
      <tr><td>Mistral</td><td>Mistral, Mixtral</td><td>Efficient, strong models</td></tr>
      <tr><td>Together AI</td><td>Open models (Llama, Mistral)</td><td>Cost-effective hosting</td></tr>
    </tbody></table>
    <p><strong>Hugging Face</strong> — platform for open-source models, datasets and ML tools;
    access to thousands of pre-trained models; easy to use with the Transformers library.</p>

    <h3>14.11 Other Useful Frameworks</h3>
    <table class="tbl"><thead><tr><th>Framework</th><th>Use case</th></tr></thead><tbody>
      <tr><td>Haystack</td><td>RAG pipelines, document search</td></tr>
      <tr><td>CrewAI</td><td>Multi-agent systems</td></tr>
      <tr><td>AutoGen</td><td>Agent collaboration (Microsoft)</td></tr>
      <tr><td>LangGraph</td><td>Stateful multi-agent workflows</td></tr>
      <tr><td>n8n</td><td>Workflow automation (build AI agents)</td></tr>
      <tr><td>Streamlit / Gradio</td><td>Build AI web apps and quick demos</td></tr>
      <tr><td>FastAPI</td><td>Build APIs for AI applications</td></tr>
      <tr><td>Docker / Kubernetes</td><td>Containerize, scale and deploy</td></tr>
    </tbody></table>

    <div class="takeaway"><strong>14.14 Key Takeaways:</strong> Tools and frameworks make it easier
    to build powerful applications. LangChain is general purpose; LlamaIndex is great for RAG;
    Hugging Face provides open models and datasets. Vector databases are essential for semantic
    search. Combine the right tools to build production-ready AI solutions.</div>
  `
},
{
  n: 15, img: "AI-15.jpg", page: "15 / 20",
  title: "Fine-tuning and Model Training",
  tags: ["fine-tuning", "peft", "lora", "qlora", "instruction"],
  html: `
    <div class="grid2">
      <div>
        <h3>15.1 What is Fine-tuning?</h3>
        <ul>
          <li>Further training a pre-trained model on a specific dataset to adapt it for a particular
          task or domain.</li>
          <li>Helps the model learn domain-specific knowledge, follow specific instructions and
          generate more accurate results.</li>
          <li>Start with a pre-trained model (Llama, GPT, BERT) and continue training with your own data.</li>
        </ul>
      </div>
      <div>
        <h3>15.2 Why Fine-tune?</h3>
        <ul>
          <li>Better performance on domain-specific tasks</li>
          <li>Understands your business context; follows custom instructions and style</li>
          <li>Reduces hallucinations; works with private and proprietary data</li>
          <li>Can be optimized for specific formats (e.g. structured output)</li>
        </ul>
      </div>
    </div>

    <h3>15.3 When to Fine-tune vs RAG</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>RAG</th><th>Fine-tuning</th></tr></thead><tbody>
      <tr><td>Data update</td><td>No retraining needed</td><td>Requires retraining</td></tr>
      <tr><td>Best for</td><td>Dynamic, frequently changing data</td><td>Static or domain-specific tasks</td></tr>
      <tr><td>Cost</td><td>Lower (no training)</td><td>Higher (training cost)</td></tr>
      <tr><td>Implementation time</td><td>Faster and easier</td><td>Complex and time consuming</td></tr>
      <tr><td>Hallucination</td><td>Reduced (uses real data)</td><td>Reduced (learned better behavior)</td></tr>
    </tbody></table>

    <h3>15.4 Fine-tuning Process</h3>
    <p>Collect &amp; prepare data (instruction format) → Preprocess (clean, format, tokenize) →
    Choose base model (Llama, Mistral, GPT) → Train / fine-tune (LoRA or full) → Evaluate (accuracy,
    safety) → Deploy (API / local, monitor &amp; update).</p>

    <h3>15.5 Types of Fine-tuning</h3>
    <ul>
      <li><strong>Full Fine-tuning</strong> — update all model parameters; high compute cost.</li>
      <li><strong>PEFT (Parameter-Efficient Fine-tuning)</strong> — update only a small number of parameters.</li>
      <li><strong>LoRA (Low-Rank Adaptation)</strong> — popular PEFT technique; lightweight and efficient.</li>
      <li><strong>QLoRA</strong> — quantized version of LoRA; works on consumer GPUs.</li>
      <li><strong>Instruction Fine-tuning</strong> — train the model to follow instructions (chat, QA).</li>
      <li><strong>Domain Fine-tuning</strong> — train on domain-specific data (medical, legal, finance).</li>
    </ul>

    <h3>15.6 Training Data Format (Instruction Style)</h3>
    <pre><code>[
  { "instruction": "Summarize the following document.",
    "input": "Artificial intelligence is the simulation...",
    "output": "This document explains the basics of AI..." },
  { "instruction": "Answer the question based on context.",
    "input": "Context: ... Question: What is RAG?",
    "output": "RAG (Retrieval-Augmented Generation) ..." }
]</code></pre>

    <h3>15.9 Example: Fine-tuning with Hugging Face (LoRA)</h3>
    <pre><code>from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model, TaskType

model_name = "meta-llama/Meta-Llama-3-8B"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name, load_in_4bit=True)

lora_config = LoraConfig(r=8, lora_alpha=16,
    target_modules=["q_proj", "v_proj"], task_type=TaskType.CAUSAL_LM)
model = get_peft_model(model, lora_config)
# ... TrainingArguments + Trainer.train()</code></pre>

    <h3>15.11 Fine-tuning vs Prompting vs RAG</h3>
    <table class="tbl"><thead><tr><th>Aspect</th><th>Prompting</th><th>RAG</th><th>Fine-tuning</th></tr></thead><tbody>
      <tr><td>Model update</td><td>No</td><td>No</td><td>Yes</td></tr>
      <tr><td>Uses external data</td><td>No</td><td>Yes</td><td>No</td></tr>
      <tr><td>Cost</td><td>Low</td><td>Medium</td><td>High</td></tr>
      <tr><td>Best for</td><td>Simple tasks</td><td>Knowledge lookup</td><td>Domain-specific tasks</td></tr>
      <tr><td>Output quality</td><td>General</td><td>Factual (with sources)</td><td>High (customized)</td></tr>
    </tbody></table>

    <div class="takeaway"><strong>15.15 Key Takeaways:</strong> Fine-tuning adapts a pre-trained
    model to your needs. PEFT techniques like LoRA and QLoRA make it more accessible. Use the right
    approach (prompting, RAG or fine-tuning) based on your use case. Good data, proper evaluation and
    continuous monitoring are essential.</div>
  `
},
{
  n: 16, img: "AI-16.jpg", page: "16 / 20",
  title: "AI Evaluation, Hallucinations, Guardrails, Safety & Responsible AI",
  tags: ["evaluation", "hallucinations", "guardrails", "responsible ai", "safety"],
  html: `
    <h3>16.1 Why Evaluation is Important</h3>
    <ul>
      <li>Ensures the model gives accurate, reliable, relevant responses.</li>
      <li>Helps measure quality and compare different models or prompts.</li>
      <li>Identifies issues like hallucinations, bias, toxicity and incomplete answers.</li>
      <li>Essential for production where wrong answers can be costly; supports continuous improvement.</li>
    </ul>

    <h3>16.2 Key Evaluation Metrics</h3>
    <table class="tbl"><thead><tr><th>Metric</th><th>Measures</th><th>Use case</th></tr></thead><tbody>
      <tr><td>Accuracy</td><td>Correctness of answer</td><td>General QA, factual tasks</td></tr>
      <tr><td>Precision</td><td>Relevance of retrieved/generated content</td><td>RAG, information retrieval</td></tr>
      <tr><td>Recall</td><td>Completeness of retrieved info</td><td>RAG, search</td></tr>
      <tr><td>F1-Score</td><td>Balance of precision and recall</td><td>Retrieval systems</td></tr>
      <tr><td>BLEU</td><td>Similarity with reference (n-gram)</td><td>Text generation, translation</td></tr>
      <tr><td>ROUGE</td><td>Recall-based metric for summaries</td><td>Summarization</td></tr>
      <tr><td>BERTScore</td><td>Semantic similarity using embeddings</td><td>Open-ended generation</td></tr>
      <tr><td>Perplexity</td><td>How well the model predicts text</td><td>Language model evaluation</td></tr>
      <tr><td>Human Evaluation</td><td>Real-world usefulness, relevance, safety</td><td>Final validation</td></tr>
    </tbody></table>

    <h3>16.5 What are AI Hallucinations?</h3>
    <ul>
      <li>When the model generates incorrect, false or made-up information that looks realistic.</li>
      <li>Caused by lack of context, incomplete data or model limitations.</li>
      <li>Common in open-ended questions or when the model is unsure.</li>
      <li>Mitigate with RAG, better prompts, validation and guardrails.</li>
    </ul>

    <h3>16.7 How to Reduce Hallucinations</h3>
    <ul>
      <li>Use RAG (provide relevant, up-to-date context).</li>
      <li>Provide clear, specific prompts; validate against external sources/APIs.</li>
      <li>Use citations and source references.</li>
      <li>Set instructions (e.g. “If unsure, say you don't know”).</li>
      <li>Use guardrails and output validation.</li>
    </ul>

    <h3>16.8–16.9 Guardrails for AI</h3>
    <p>Guardrails are safety measures to control model behavior and ensure reliable, safe, aligned
    outputs. Types: <strong>Input</strong> (filter harmful input), <strong>Output</strong> (validate
    output), <strong>Content</strong> (block toxic/biased), <strong>Context</strong> (enforce
    domain-specific context), <strong>Tool</strong> (control which tools the agent can use),
    <strong>Policy</strong> (follow org/regulatory policies).</p>

    <h3>16.12 Responsible AI Principles</h3>
    <ul>
      <li>Fairness — avoid bias, ensure equal treatment</li>
      <li>Accountability — be transparent and responsible</li>
      <li>Transparency — explain how the model works</li>
      <li>Privacy — protect user data and follow regulations</li>
      <li>Safety — prevent harmful or unintended use</li>
      <li>Human-centric — keep humans in the loop</li>
      <li>Inclusiveness — make AI accessible to diverse users</li>
      <li>Sustainability — use resources efficiently and responsibly</li>
    </ul>

    <h3>16.14 Real-World Tools</h3>
    <p>OpenAI Moderation API (toxicity, PII), Guardrails AI, LangChain (output validation,
    structured output), LlamaIndex (structured retrieval with citations), Azure AI Content Safety,
    NeMo Guardrails (NVIDIA), DeepEval, TruLens.</p>

    <div class="takeaway"><strong>16.16 Key Takeaways:</strong> Evaluation ensures reliable, useful
    AI. Hallucinations are common but can be reduced with RAG, better prompts and guardrails.
    Guardrails help control and secure AI behavior. Safety and responsible AI are critical for
    real-world deployment. Use the right tools, metrics and practices to build trustworthy systems.</div>
  `
},
{
  n: 17, img: "AI-17.jpg", page: "17 / 20",
  title: "AI Application Architecture",
  tags: ["architecture", "rag", "caching", "scaling", "deployment"],
  html: `
    <h3>17.1 What is AI Application Architecture?</h3>
    <ul>
      <li>Defines how different components (LLMs, data sources, tools, APIs, databases, caching,
      monitoring) work together to build a reliable, scalable, maintainable AI system.</li>
      <li>A well-designed architecture ensures better performance, security, cost efficiency and UX.</li>
      <li>May include RAG, vector databases, model APIs, agents, tools, caching, queues, monitoring
      and deployment setup.</li>
    </ul>

    <h3>17.2 Key Components</h3>
    <ol>
      <li>User Interface (web / mobile / API)</li>
      <li>API Layer (REST / GraphQL)</li>
      <li>Orchestration Layer (RAG / agents)</li>
      <li>LLMs (OpenAI, Claude, Llama)</li>
      <li>Databases (SQL, vector DB, cache)</li>
      <li>External tools / APIs</li>
      <li>Background jobs / queues</li>
      <li>Monitoring &amp; logging</li>
      <li>Authentication &amp; security</li>
      <li>Deployment &amp; infrastructure</li>
    </ol>

    <h3>17.5 End-to-End Application Flow</h3>
    <ol>
      <li>User sends a query (web/mobile/API).</li>
      <li>API layer authenticates and validates the request.</li>
      <li>Query is processed (rewrite, classify, extract intent).</li>
      <li>Relevant documents retrieved from the vector DB.</li>
      <li>Context is built using retrieved chunks + instructions.</li>
      <li>LLM generates the response (with or without tools).</li>
      <li>Response is post-processed (formatting, citations).</li>
      <li>Cached if needed and returned to the user.</li>
      <li>Logs, metrics and traces recorded for monitoring.</li>
    </ol>

    <h3>17.6 Technology Stack (Example)</h3>
    <table class="tbl"><thead><tr><th>Layer</th><th>Tools / technologies</th></tr></thead><tbody>
      <tr><td>Frontend</td><td>React, Next.js, Flutter, Streamlit</td></tr>
      <tr><td>Backend</td><td>Python (FastAPI), Java (Spring Boot), Node.js</td></tr>
      <tr><td>LLM / Model APIs</td><td>OpenAI, Claude, Llama (Ollama), Gemini</td></tr>
      <tr><td>RAG / Framework</td><td>LangChain, LlamaIndex, Haystack</td></tr>
      <tr><td>Vector Database</td><td>Pinecone, Qdrant, Weaviate, Chroma</td></tr>
      <tr><td>Relational Database</td><td>PostgreSQL, MySQL</td></tr>
      <tr><td>Cache</td><td>Redis, in-memory cache</td></tr>
      <tr><td>Document Storage</td><td>AWS S3, Azure Blob, Google Cloud Storage</td></tr>
      <tr><td>Queue / Background Jobs</td><td>Celery, Kafka, RabbitMQ</td></tr>
      <tr><td>Monitoring &amp; Logging</td><td>Prometheus, Grafana, ELK, LangSmith, OpenTelemetry</td></tr>
      <tr><td>Deployment</td><td>Docker, Kubernetes, AWS, GCP, Azure</td></tr>
    </tbody></table>

    <h3>17.7 Caching Strategy</h3>
    <p>Use caching to reduce latency and cost. Cache embeddings, retrieved chunks and final responses
    (tools: Redis, in-memory cache). Set TTL based on use case. Flow: User Query → check cache (hit →
    return cached response; miss → process with RAG/LLM → store in cache with TTL).</p>

    <h3>17.8 Scaling and Deployment</h3>
    <ul>
      <li>Containerize using Docker; use Kubernetes for scalable deployment.</li>
      <li>Use auto-scaling based on traffic.</li>
      <li>Separate stateless (API) and stateful (DB, cache, vector store) components.</li>
      <li>Use CI/CD pipelines; consider serverless for cost efficiency.</li>
    </ul>

    <h3>17.10 Security &amp; Access Control</h3>
    <ul>
      <li>Authentication (JWT, OAuth, API keys); role-based access control (RBAC).</li>
      <li>Validate and sanitize user inputs; use guardrails.</li>
      <li>Encrypt sensitive data (at rest and in transit); set rate limits and usage quotas.</li>
      <li>Follow data privacy regulations (GDPR, HIPAA).</li>
    </ul>

    <div class="takeaway"><strong>17.14 Key Takeaways:</strong> AI application architecture combines
    multiple components to build robust systems. RAG, caching, monitoring and security are essential.
    Choose the right tools for your requirement and scale. Focus on reliability, safety and cost
    efficiency, and continuously monitor, evaluate and improve.</div>
  `
},
{
  n: 18, img: "AI-18.jpg", page: "18 / 20",
  title: "AI Projects for Developers",
  tags: ["projects", "portfolio", "roadmap", "beginner to advanced"],
  html: `
    <div class="grid2">
      <div>
        <h3>18.1 Why Build AI Projects?</h3>
        <ul>
          <li>Learn by doing; build practical skills and a portfolio for interviews.</li>
          <li>Understand real-world challenges and solutions.</li>
          <li>Show end-to-end implementation skills (from data to deployment).</li>
          <li>Makes you job-ready for AI Engineer and LLM roles.</li>
        </ul>
      </div>
      <div>
        <h3>18.2 Project Learning Roadmap</h3>
        <ol>
          <li>Learn basics (Python, ML, LLMs, APIs)</li>
          <li>Build beginner projects (simple, single component)</li>
          <li>Intermediate projects (combine multiple components)</li>
          <li>Advanced projects (RAG, agents, fine-tuning, multimodal)</li>
          <li>Deploy and share (cloud, Docker, portfolio, GitHub)</li>
        </ol>
      </div>
    </div>

    <h3>18.4–18.6 Project Ideas by Level</h3>
    <table class="tbl"><thead><tr><th>Beginner (1–2 wks)</th><th>Intermediate (1–6 wks)</th><th>Advanced (1–3 mo)</th></tr></thead><tbody>
      <tr><td>Simple chatbot (OpenAI API)</td><td>RAG-based chat with PDF (LangChain + vector DB)</td><td>AI research agent (search, read, summarize, write)</td></tr>
      <tr><td>Text summarizer</td><td>Multi-document QA system</td><td>Multi-agent system (planner + researcher + writer)</td></tr>
      <tr><td>Sentiment analysis</td><td>AI resume analyzer</td><td>Enterprise RAG system (auth, document management)</td></tr>
      <tr><td>Image classifier (pre-trained)</td><td>Code assistant (LLM + function calling)</td><td>Custom fine-tuned model (legal, medical, finance)</td></tr>
      <tr><td>Speech to text (Whisper)</td><td>AI image generator (Stable Diffusion)</td><td>Real-time AI application (streaming, monitoring)</td></tr>
    </tbody></table>

    <h3>18.8 Example Project — RAG with LangChain</h3>
    <pre><code>from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

loader = PyPDFLoader("data/sample.pdf")
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)

embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
qa = RetrievalQA.from_chain_type(llm=llm, retriever=vectorstore.as_retriever())
print(qa.invoke({"query": "What is this document about?"}))</code></pre>

    <h3>18.11 Deployment Options</h3>
    <p>Docker (containerize) · Kubernetes (scaling) · AWS (EC2, ECS, S3) · GCP (Cloud Run) ·
    Azure (App Service) · Streamlit (quick deploy) · Hugging Face Spaces.</p>

    <h3>18.12 Building a Portfolio</h3>
    <ul>
      <li>Push clean, documented code to GitHub; focus on a real README with screenshots.</li>
      <li>Deploy a live demo (Streamlit / Vercel / Cloud).</li>
      <li>Explain architecture and tech stack; add a blog post or LinkedIn post.</li>
      <li>Showcase multiple projects (beginner → advanced); keep updating with new ideas.</li>
    </ul>

    <div class="takeaway"><strong>18.15 Key Takeaways:</strong> Start small and gradually build
    complex projects. Focus on real-world use cases. Combine multiple components (RAG, agents, tools).
    Deploy and showcase your work. Learn from open-source projects and build a strong portfolio.</div>
  `
},
{
  n: 19, img: "AI-19.jpg", page: "19 / 20",
  title: "AI Engineer Interview Preparation",
  tags: ["interview", "system design", "coding", "scenario"],
  html: `
    <h3>19.1 Interview Preparation Strategy</h3>
    <ol>
      <li>Understand core concepts (AI, ML, LLMs, RAG, agents).</li>
      <li>Practice coding and problem solving.</li>
      <li>Learn system design for AI applications.</li>
      <li>Solve real interview questions; work on hands-on projects.</li>
      <li>Revise key tools and frameworks.</li>
      <li>Prepare for behavioral and scenario questions.</li>
      <li>Take mock interviews; keep a cheat sheet and quick notes.</li>
    </ol>

    <h3>19.2 Key Topics to Cover</h3>
    <table class="tbl"><thead><tr><th>Category</th><th>Topics</th></tr></thead><tbody>
      <tr><td>Programming</td><td>Python, data structures &amp; algorithms, system design, concurrency</td></tr>
      <tr><td>Machine Learning</td><td>Supervised/unsupervised learning, model evaluation, feature engineering</td></tr>
      <tr><td>Deep Learning</td><td>Neural networks, CNN, RNN, Transformers</td></tr>
      <tr><td>Generative AI</td><td>LLMs, prompt engineering, RAG, fine-tuning, agents, tool calling</td></tr>
      <tr><td>Frameworks</td><td>LangChain, LlamaIndex, Hugging Face, OpenAI APIs, vector databases</td></tr>
      <tr><td>Databases</td><td>SQL, NoSQL, vector DB (Pinecone, Qdrant, Weaviate, Chroma)</td></tr>
      <tr><td>Deployment</td><td>Docker, Kubernetes, CI/CD, cloud (AWS/Azure/GCP), monitoring</td></tr>
      <tr><td>System Design</td><td>Scalable AI systems, RAG architecture, agent systems, data pipelines</td></tr>
    </tbody></table>

    <h3>19.5–19.7 Common Questions (GenAI, RAG, Agents)</h3>
    <ul>
      <li><strong>LLM &amp; GenAI:</strong> What is an LLM and how does it work? Training vs
      fine-tuning vs RAG? Attention mechanism? Tokenization? Temperature, top-k, top-p? What are
      embeddings? Reduce hallucinations? Function calling?</li>
      <li><strong>RAG:</strong> What is RAG and why needed? How to implement a RAG pipeline? Chunking
      strategies? Choose a vector DB? Improve retrieval accuracy? Evaluate RAG? Hybrid search and
      re-ranking?</li>
      <li><strong>Agents:</strong> What is an AI agent? How do agents plan and execute tasks? Tool
      calling? Single-agent vs multi-agent? Maintain memory? Handle long-running tasks? Frameworks?</li>
    </ul>

    <h3>19.10 System Design Questions</h3>
    <ul>
      <li>Design a RAG-based document Q&amp;A system · a multi-agent system · a scalable LLM application.</li>
      <li>Handle high traffic and low latency · a real-time AI chatbot.</li>
      <li>Store and manage embeddings at scale · a data pipeline for model training.</li>
      <li>Implement monitoring and evaluation · a cost-effective solution for enterprise use.</li>
    </ul>

    <h3>19.12 Example Coding — Cosine Similarity</h3>
    <pre><code>import numpy as np

def cosine_similarity(vec1, vec2):
    vec1, vec2 = np.array(vec1), np.array(vec2)
    dot = np.dot(vec1, vec2)
    norm1, norm2 = np.linalg.norm(vec1), np.linalg.norm(vec2)
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return dot / (norm1 * norm2)

print(cosine_similarity([0.1, 0.2, 0.3], [0.4, 0.5, 0.6]))</code></pre>

    <div class="grid2">
      <div><h4>19.15 Common Mistakes to Avoid ❌</h4><ul>
        <li>Not understanding core fundamentals</li>
        <li>Memorizing answers without understanding</li>
        <li>Not explaining your thought process</li>
        <li>Ignoring trade-offs and limitations</li>
        <li>Not practicing hands-on coding; giving vague answers</li>
      </ul></div>
      <div><h4>19.16 Key Takeaways ✅</h4><ul>
        <li>Focus on fundamentals and hands-on practice</li>
        <li>Build and discuss real projects</li>
        <li>Be ready for technical and behavioral questions</li>
        <li>Explain concepts with examples; practice system design</li>
        <li>Be confident, curious and honest</li>
      </ul></div>
    </div>
  `
},
{
  n: 20, img: "AI-20.jpg", page: "20 / 20",
  title: "Artificial Intelligence Master Cheat Sheet",
  tags: ["cheat sheet", "revision", "workflow", "roadmap"],
  html: `
    <p class="note">From basics to production — everything in one page for AI engineers.
    Complete revision · essential concepts · end-to-end workflow · learning roadmap.</p>

    <h3>20.1 Complete AI Ecosystem (Big Picture)</h3>
    <table class="tbl"><thead><tr><th>Stage</th><th>Pieces</th></tr></thead><tbody>
      <tr><td>Data Sources</td><td>Documents, databases, APIs, web, audio/video, real-time data</td></tr>
      <tr><td>Data Processing</td><td>Cleaning, chunking, transformation, embedding, indexing, storage</td></tr>
      <tr><td>AI / LLM Layer</td><td>OpenAI, Claude, Llama, Gemini, Mistral</td></tr>
      <tr><td>Tools &amp; Frameworks</td><td>LangChain, LlamaIndex, Hugging Face, vector DBs, databases, APIs/plugins</td></tr>
      <tr><td>Application Layer</td><td>Chatbot, AI agent, RAG system, analytics, automation, enterprise app</td></tr>
      <tr><td>Deployment &amp; Monitoring</td><td>Docker, Kubernetes, cloud (AWS/Azure/GCP), CI/CD, monitoring, logging</td></tr>
    </tbody></table>

    <h3>20.2 Key Concepts (Quick Revision)</h3>
    <ol>
      <li>Machine Learning — learn from data (supervised, unsupervised, reinforcement).</li>
      <li>Deep Learning — neural networks (CNN, RNN, Transformers).</li>
      <li>LLMs — understand and generate human-like text.</li>
      <li>RAG — combine LLMs with your private data.</li>
      <li>AI Agents — plan, reason and use tools to achieve goals.</li>
      <li>Prompt Engineering — guide the model with better prompts.</li>
      <li>Fine-tuning — train the model on domain-specific data.</li>
      <li>Evaluation — measure quality, reduce hallucinations.</li>
      <li>Guardrails — ensure safe, reliable and responsible AI.</li>
      <li>Deployment — build scalable, production-ready systems.</li>
    </ol>

    <h3>20.3 LLM Application Development Workflow</h3>
    <p>Use Case &amp; Planning → Data Ingestion → Embedding &amp; Indexing → Build Application →
    Evaluation &amp; Testing → Deployment → Monitoring &amp; Feedback → Scale &amp; Maintain.</p>

    <h3>20.8 Learning Roadmap (Step by Step)</h3>
    <ol>
      <li><strong>Foundations (2–4 wks):</strong> Python, math basics, data structures, ML fundamentals.</li>
      <li><strong>Core Concepts (4–8 wks):</strong> deep learning, Transformers, prompting, RAG, vector DBs, agents.</li>
      <li><strong>Hands-on Projects (8–16 wks):</strong> build real projects (beginner → advanced) with OpenAI, LangChain, LlamaIndex.</li>
      <li><strong>Advanced Topics (4–8 wks):</strong> fine-tuning, evaluation, guardrails, system design, scalability, security.</li>
      <li><strong>Production &amp; Career (ongoing):</strong> deploy on cloud, CI/CD, monitoring; contribute to open source; practice interviews; stay updated.</li>
    </ol>

    <h3>20.9 Common Challenges &amp; Solutions</h3>
    <table class="tbl"><thead><tr><th>Challenge</th><th>Solution</th></tr></thead><tbody>
      <tr><td>Hallucinations</td><td>RAG, better prompts, validation, guardrails</td></tr>
      <tr><td>Poor retrieval results</td><td>Improve chunking, embeddings</td></tr>
      <tr><td>High cost</td><td>Caching, smaller models, optimize tokens</td></tr>
      <tr><td>Slow response</td><td>Async processing, caching, streaming</td></tr>
      <tr><td>Security &amp; privacy</td><td>Access control, encryption, data masking</td></tr>
      <tr><td>Scalability</td><td>Docker, Kubernetes, auto-scaling</td></tr>
    </tbody></table>

    <div class="takeaway"><strong>20.11 Final Takeaways:</strong> AI is a tool to augment human
    capabilities. RAG, agents and LLMs together unlock real value. Focus on building, practicing and
    solving real problems. Evaluation, safety and responsible AI are critical. Keep learning,
    building and showcasing. “Keep Learning, Keep Building, Keep Exploring — the best way to learn AI
    is by doing real projects.” — Rahul Yadav</div>
  `
},
];
