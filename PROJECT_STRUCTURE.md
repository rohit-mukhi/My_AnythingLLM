# AnythingLLM Project Structure

## Root Directory

```
anything-llm/
├── .devcontainer/          # VS Code Dev Container configuration
├── .github/               # GitHub workflows, issue templates, funding
├── browser-extension/     # Chrome browser extension submodule
├── cloud-deployments/     # Cloud deployment configurations
│   ├── aws/              # AWS CloudFormation templates
│   ├── digitalocean/     # DigitalOcean Terraform configs
│   ├── gcp/              # Google Cloud Platform deployment
│   ├── helm/             # Kubernetes Helm charts
│   ├── huggingface-spaces/ # HuggingFace Spaces Dockerfile
│   ├── k8/               # Kubernetes manifests
│   └── openshift/        # OpenShift deployment files
├── collector/             # Document processing service
├── docker/               # Docker deployment files
├── embed/                # Web embed widget submodule
├── extras/               # Additional tools and scripts
│   ├── scripts/         # Utility scripts
│   ├── support/         # Support announcements
│   └── translator/      # Translation management tools
├── frontend/             # React/Vite frontend application
├── images/               # Project images and logos
├── locales/              # Localization README files
├── open-computer/        # Open Computer project (AI computer environment)
├── server/               # Node.js Express backend API
├── .devcontainer.json    # Dev container config
├── .dockerignore         # Docker ignore rules
├── .editorconfig         # Editor formatting rules
├── .gitattributes        # Git attributes
├── .gitignore            # Git ignore rules
├── .hadolint.yaml        # Dockerfile linter config
├── .nvmrc                # Node.js version specification
├── .prettierignore       # Prettier ignore rules
├── .prettierrc           # Prettier configuration
├── BARE_METAL.md         # Bare metal installation guide
├── CONTRIBUTING.md       # Contribution guidelines
├── LICENSE               # MIT License
├── package.json          # Root package.json
├── pull_request_template.md
├── README.md             # Main project README
├── SECURITY.md           # Security policy
├── SETUP_SUMMARY.md      # This file - setup documentation
└── TERMS_SELF_HOSTED.md  # Self-hosted terms
```

## Server Directory (`server/`)

The main backend API server.

```
server/
├── __tests__/            # Unit and integration tests
│   ├── models/          # Model tests
│   └── utils/           # Utility function tests
├── endpoints/            # API endpoint handlers
│   ├── api/             # REST API endpoints
│   │   ├── admin/       # Admin operations
│   │   ├── auth/        # Authentication
│   │   ├── document/    # Document management
│   │   ├── embed/       # Embed widget API
│   │   ├── openai/      # OpenAI-compatible endpoints
│   │   ├── system/      # System operations
│   │   ├── userManagement/ # User management
│   │   ├── workspace/   # Workspace operations
│   │   └── workspaceThread/ # Thread operations
│   ├── embed/           # Embed-specific endpoints
│   ├── experimental/    # Experimental features
│   ├── extensions/      # Extension endpoints
│   ├── mobile/          # Mobile app endpoints
│   └── utils/           # Utility endpoints
├── jobs/                 # Background job workers
│   ├── helpers/         # Job helper utilities
│   ├── cleanup-generated-files.js
│   ├── cleanup-orphan-documents.js
│   ├── embedding-worker.js
│   ├── extract-memories.js
│   ├── handle-telegram-chat.js
│   ├── run-scheduled-job.js
│   └── sync-watched-documents.js
├── middleware/           # Express middleware
├── models/               # Database models (Prisma)
├── prisma/               # Prisma ORM configuration
│   ├── migrations/       # Database migrations (43 total)
│   ├── schema.prisma     # Prisma schema definition
│   └── seed.js          # Database seed data
├── storage/              # Runtime storage
│   ├── assets/          # Static assets
│   ├── comkey/          # Communication keys
│   ├── documents/       # Document storage
│   ├── generated-files/ # Generated output files
│   ├── lancedb/         # Vector database
│   ├── models/          # Downloaded models
│   ├── push-notifications/ # Push notification keys
│   ├── anythingllm.db   # SQLite database
│   └── README.md
├── swagger/              # API documentation
│   ├── dark-swagger.css
│   ├── index.css
│   ├── index.js
│   ├── init.js
│   ├── openapi.json
│   └── utils.js
├── utils/                # Core utility modules
│   ├── agentFlows/      # Agent flow execution
│   ├── agents/          # AI agent utilities
│   ├── AiProviders/     # LLM provider integrations
│   │   ├── anthropic/
│   │   ├── apipie/
│   │   ├── azureOpenAi/
│   │   ├── bedrock/
│   │   ├── cerebras/
│   │   ├── cohere/
│   │   ├── cometapi/
│   │   ├── deepseek/
│   │   ├── dockerModelRunner/
│   │   ├── fireworksAi/
│   │   ├── foundry/
│   │   ├── gemini/
│   │   ├── genericOpenAi/
│   │   ├── giteeai/
│   │   ├── groq/
│   │   ├── koboldCPP/
│   │   ├── lemonade/
│   │   ├── liteLLM/
│   │   ├── lmStudio/
│   │   ├── localAi/
│   │   ├── minimax/
│   │   ├── mistral/
│   │   ├── modelMap/
│   │   ├── modelRouter/
│   │   ├── moonshotAi/
│   │   ├── novita/
│   │   ├── nvidiaNim/   # NVIDIA NIM provider
│   │   ├── ollama/
│   │   ├── openAi/
│   │   ├── openRouter/
│   │   ├── perplexity/
│   │   ├── ppio/
│   │   ├── privatemode/
│   │   ├── sambanova/
│   │   ├── textGenWebUI/
│   │   ├── togetherAi/
│   │   ├── xai/
│   │   └── zai/
│   ├── BackgroundWorkers/ # Background worker service
│   ├── boot/            # Application bootstrapping
│   ├── chats/           # Chat functionality
│   │   ├── commands/    # Chat commands
│   │   ├── agents.js
│   │   ├── apiChatHandler.js
│   │   ├── embed.js
│   │   ├── exportChatToFile.js
│   │   ├── index.js
│   │   ├── openaiCompatible.js
│   │   └── stream.js
│   ├── collectorApi/    # Collector API integration
│   ├── comKey/          # Communication key management
│   ├── database/        # Database connection
│   ├── DocumentManager/ # Document management
│   ├── EmbeddingEngines/ # Embedding model providers
│   │   ├── azureOpenAi/
│   │   ├── cohere/
│   │   ├── gemini/
│   │   ├── genericOpenAi/
│   │   ├── lemonade/
│   │   ├── liteLLM/
│   │   ├── lmstudio/
│   │   ├── localAi/
│   │   ├── mistral/
│   │   ├── native/      # Native embedder
│   │   ├── ollama/
│   │   ├── openAi/
│   │   ├── openRouter/
│   │   └── voyageAi/
│   ├── EmbeddingRerankers/ # Reranking engines
│   ├── EncryptionManager/ # Data encryption
│   ├── files/           # File handling utilities
│   ├── helpers/         # General helpers
│   ├── http/            # HTTP utilities
│   ├── logger/          # Logging utilities
│   ├── MCP/             # Model Context Protocol
│   ├── memories/        # Memory management
│   ├── middleware/      # Express middleware
│   ├── PasswordRecovery/ # Password recovery
│   ├── prisma/          # Prisma utilities
│   ├── PushNotifications/ # Push notification service
│   ├── router/          # Express router
│   ├── SpeechToText/    # STT providers
│   ├── telegramBot/     # Telegram integration
│   ├── telemetry/       # Telemetry service
│   ├── TextSplitter/    # Text splitting utilities
│   ├── TextToSpeech/    # TTS providers
│   ├── vectorDbProviders/ # Vector database providers
│   │   ├── astra/
│   │   ├── chroma/
│   │   ├── chromacloud/
│   │   ├── lance/
│   │   ├── milvus/
│   │   ├── pgvector/
│   │   ├── pinecone/
│   │   ├── qdrant/
│   │   ├── weaviate/
│   │   ├── zilliz/
│   │   └── base.js
│   ├── vectorStore/     # Vector store management
│   ├── EmbeddingWorkerManager.js
│   └── userLocale.js
├── .env.development      # Development environment config
├── .env.example          # Environment template
├── .flowconfig           # Flow type configuration
├── .gitignore
├── .nvmrc
├── eslint.config.mjs
├── index.js              # Server entry point
├── jsconfig.json
├── nodemon.json
├── package.json
└── yarn.lock
```

## Frontend Directory (`frontend/`)

React + Vite frontend application.

```
frontend/
├── public/               # Static assets
│   ├── embed/           # Embed widget files
│   ├── fonts/           # Custom fonts
│   ├── service-workers/ # Service worker files
│   ├── anything-llm-dark.png
│   ├── anything-llm-light.png
│   ├── favicon.ico
│   ├── favicon.png
│   ├── manifest.json
│   └── robots.txt
├── scripts/              # Build scripts
├── src/                  # Source code
│   ├── components/      # React components
│   │   ├── CanViewChatHistory/
│   │   ├── ChangeWarning/
│   │   ├── ChatBubble/
│   │   ├── CommunityHub/
│   │   ├── contexts/    # React contexts
│   │   ├── ContextualSaveBar/
│   │   ├── DataConnectorOption/
│   │   ├── DefaultChat/
│   │   ├── EmbeddingSelection/
│   │   ├── ErrorBoundaryFallback/
│   │   ├── Footer/
│   │   ├── ImageLightbox/
│   │   ├── KeyboardShortcutsHelp/
│   │   ├── lib/         # Shared utilities
│   │   ├── LLMSelection/
│   │   ├── Modals/      # Modal components
│   │   ├── ModalWrapper/
│   │   ├── PrivateRoute/
│   │   ├── ProviderPrivacy/
│   │   ├── SettingsButton/
│   │   ├── SettingsSidebar/
│   │   ├── Sidebar/
│   │   ├── SpeechToText/
│   │   ├── TextToSpeech/
│   │   ├── TranscriptionSelection/
│   │   ├── UserIcon/
│   │   ├── UserMenu/
│   │   ├── VectorDBSelection/
│   │   ├── WorkspaceChat/
│   │   └── Preloader.jsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useAppVersion.js
│   │   ├── useChatContainerQuickScroll.js
│   │   ├── useChatHistoryScrollHandle.js
│   │   ├── useCommunityHubAuth.js
│   │   ├── useCopyText.js
│   │   ├── useGetProvidersModels.js
│   │   ├── useLanguageOptions.js
│   │   ├── useLoginMode.js
│   │   ├── useLogo.js
│   │   ├── useModal.js
│   │   ├── useOnboardingComplete.js
│   │   ├── usePfp.js
│   │   ├── usePolling.js
│   │   ├── usePrefersDarkMode.js
│   │   ├── usePromptInputStorage.js
│   │   ├── useProviderEndpointAutoDiscovery.js
│   │   ├── useQuery.js
│   │   ├── useScrollActiveItemIntoView.js
│   │   ├── useSimpleSSO.js
│   │   ├── useTextSize.js
│   │   ├── useTheme.js
│   │   ├── useTimeoutProgress.js
│   │   ├── useUser.js
│   │   └── useWebPushNotifications.js
│   ├── locales/         # Internationalization
│   │   ├── ar/          # Arabic
│   │   ├── ca/          # Catalan
│   │   ├── cs/          # Czech
│   │   ├── da/          # Danish
│   │   ├── de/          # German
│   │   ├── en/          # English
│   │   ├── es/          # Spanish
│   │   ├── et/          # Estonian
│   │   ├── fa/          # Persian
│   │   ├── fr/          # French
│   │   ├── he/          # Hebrew
│   │   ├── it/          # Italian
│   │   ├── ja/          # Japanese
│   │   ├── ko/          # Korean
│   │   ├── lt/          # Lithuanian
│   │   ├── lv/          # Latvian
│   │   ├── nl/          # Dutch
│   │   ├── pl/          # Polish
│   │   ├── pt_BR/       # Portuguese (Brazil)
│   │   ├── ro/          # Romanian
│   │   ├── ru/          # Russian
│   │   ├── tr/          # Turkish
│   │   ├── vn/          # Vietnamese
│   │   ├── zh/          # Chinese
│   │   ├── zh_TW/       # Chinese (Traditional)
│   │   ├── findUnusedTranslations.mjs
│   │   ├── normalizeEn.mjs
│   │   ├── resources.js
│   │   └── verifyTranslations.mjs
│   ├── media/           # Media assets
│   │   ├── agents/
│   │   ├── animations/
│   │   ├── announcements/
│   │   ├── dataConnectors/
│   │   ├── embeddingprovider/
│   │   ├── illustrations/
│   │   ├── llmprovider/
│   │   ├── logo/
│   │   ├── ttsproviders/
│   │   └── vectordbs/
│   ├── models/          # TypeScript models
│   │   ├── experimental/
│   │   ├── utils/
│   │   ├── admin.js
│   │   ├── agentFlows.js
│   │   ├── agentSkillWhitelist.js
│   │   ├── appearance.js
│   │   ├── browserExtensionApiKey.js
│   │   ├── communityHub.js
│   │   ├── dataConnector.js
│   │   ├── document.js
│   │   ├── embed.js
│   │   ├── files.js
│   │   ├── googleAgentSkills.js
│   │   ├── invite.js
│   │   ├── mcpServers.js
│   │   ├── memory.js
│   │   ├── mobile.js
│   │   ├── modelRouter.js
│   │   ├── outlookAgent.js
│   │   ├── promptHistory.js
│   │   ├── scheduledJobs.js
│   │   ├── system.js
│   │   ├── systemPromptVariable.js
│   │   ├── telegram.js
│   │   ├── workspace.js
│   │   └── workspaceThread.js
│   ├── pages/           # Page components
│   │   ├── Admin/
│   │   ├── GeneralSettings/
│   │   ├── Invite/
│   │   ├── Login/
│   │   ├── Main/
│   │   ├── OnboardingFlow/
│   │   ├── WorkspaceChat/
│   │   ├── WorkspaceSettings/
│   │   └── 404.jsx
│   ├── utils/           # Frontend utilities
│   │   ├── chat/
│   │   ├── piperTTS/
│   │   ├── clipboard.js
│   │   ├── constants.js
│   │   ├── directories.js
│   │   ├── keyboardShortcuts.js
│   │   ├── numbers.js
│   │   ├── paths.js
│   │   ├── request.js
│   │   ├── session.js
│   │   ├── toast.js
│   │   ├── types.js
│   │   └── username.js
│   ├── App.jsx
│   ├── AuthContext.jsx
│   ├── EmbeddingProgressContext.jsx
│   ├── i18n.js
│   ├── index.css
│   ├── LogoContext.jsx
│   ├── main.jsx
│   ├── PfpContext.jsx
│   ├── PWAContext.jsx
│   └─��� ThemeContext.jsx
├── .env
├── .env.example
├── .gitignore
├── .nvmrc
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── yarn.lock
```

## Collector Directory (`collector/`)

Document processing service for parsing and embedding documents.

```
collector/
├── __tests__/            # Unit tests
│   └── utils/
│       ├── downloadURIToFile/
│       ├── extensions/
│       ├── url/
│       └── WhisperProviders/
├── convertAudioToWav/    # Audio conversion utilities
├── extensions/           # Data connector extensions
│   ├── resync/
│   └── index.js
├── hotdir/               # Document input directory
│   └── __HOTDIR__.md
├── middleware/           # Express middleware
├── processLink/          # Link processing utilities
│   ├── convert/
│   │   └── generic.js
│   ├── helpers/
│   │   ├── htmlToMarkdown.js
│   │   └── index.js
│   └── index.js
├── processRawText/       # Raw text processing
├── processSingleFile/    # Single file processing
│   ├── convert/
│   │   ├── asPDF/
│   │   ├── asAudio.js
│   │   ├── asDocx.js
│   │   ├── asEPub.js
│   │   ├── asImage.js
│   │   ├── asMbox.js
│   │   ├── asOfficeMime.js
│   │   ├── asTxt.js
│   │   └── asXlsx.js
│   └── index.js
├── storage/              # Runtime storage
├── utils/                # Processing utilities
│   ├── comKey/
│   ├── downloadURIToFile/
│   ├── EncryptionWorker/
│   ├── extensions/      # Data connector implementations
│   │   ├── Confluence/
│   │   ├── DrupalWiki/
│   │   ├── ObsidianVault/
│   │   ├── PaperlessNgx/
│   │   ├── RepoLoader/
│   │   ├── WebsiteDepth/
│   │   └── YoutubeTranscript/
│   ├── files/
│   ├── http/
│   ├── logger/
│   ├── OCRLoader/
│   ├── runtimeSettings/
│   ├── tokenizer/
│   ├── url/
│   ├── WhisperProviders/
│   │   ├── ffmpeg/
│   │   ├── GenericOpenAiWhisper.js
│   │   ├── localWhisper.js
│   │   └── OpenAiWhisper.js
│   ├── constants.js
│   └── shell.js
├── .env
├── .env.example
├── .gitignore
├── .nvmrc
├── eslint.config.mjs
├── index.js
├── nodemon.json
├── package.json
└── yarn.lock
```

## Cloud Deployments (`cloud-deployments/`)

Deployment configurations for various cloud providers.

```
cloud-deployments/
├── aws/
│   └── cloudformation/
│       ├── aws_https_instructions.md
│       ├── cloudformation_create_anythingllm.json
│       └── DEPLOY.md
├── digitalocean/
│   └── terraform/
│       ├── DEPLOY.md
│       ├── main.tf
│       ├── outputs.tf
│       └── user_data.tp1
├── gcp/
│   └── deployment/
│       ├── DEPLOY.md
│       └── gcp_deploy_anything_llm.yaml
├── helm/
│   └── charts/
│       └── anythingllm/
├── huggingface-spaces/
│   └── Dockerfile
├── k8/
│   └── manifest.yaml
└── openshift/
    ├── docker-entrypoint.sh
    ├── Dockerfile
    └── README.md
```

## Docker Directory (`docker/`)

Docker deployment files.

```
docker/
├── vex/                  # Vulnerability exposure statements
│   ├── CVE-2019-10790.vex.json
│   ├── CVE-2024-29415.vex.json
│   ├── CVE-2024-37890.vex.json
│   └── CVE-2024-4068.vex.json
├── .env
├── .env.example
├── docker-compose.yml
├── docker-entrypoint.sh
├── docker-healthcheck.sh
├── Dockerfile
└── HOW_TO_USE_DOCKER.md
```

## Open Computer Directory (`open-computer/`)

AI computer environment project.

```
open-computer/
├── assets/
├── cli/                  # CLI tool for Open Computer
├── master/               # Master VM setup
│   ├── iso/             # Debian ISO files
│   ├── qemu/            # QEMU binaries
│   └── setup/           # VM provisioning scripts
├── scripts/              # Build and fetch scripts
├── services/             # Open Computer services
│   ├── extensions/      # Service extensions
│   ├── interface-service/ # VNC/web interface
│   ├── memory-manager/  # Memory management service
│   └── public/          # Public web files
├── .gitignore
├── .gitmodules
├── DEVELOPMENT.md
├── LICENSE
├── open-computer@
├── open-computer.cmd
└── README.md
```

## Extras Directory (`extras/`)

Additional tools and utilities.

```
extras/
├── scripts/
│   └── verifyPackageVersions.mjs
├── support/
│   └── announcements/
│       ├── assets/
│       ├── 2025-04-08.json
│       ├── 2025-07-08.json
│       ├── 2026-01-12.json
│       └── list.txt
└── translator/
    ├── .env.example
    ├── index.mjs
    └── README.md
```

## Key Directories Summary

| Directory | Purpose |
|-----------|---------|
| `server/` | Main backend API (Node.js/Express) |
| `frontend/` | Frontend UI (React/Vite) |
| `collector/` | Document processing service |
| `docker/` | Docker deployment configs |
| `server/prisma/` | Database migrations (43 total) |
| `server/utils/AiProviders/` | LLM provider integrations |
| `server/utils/vectorDbProviders/` | Vector database integrations |
| `frontend/src/locales/` | Internationalization (20+ languages) |
