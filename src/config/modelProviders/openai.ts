import { ModelProviderCard } from '@/types/llm';

// refs to: https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'GPT 3.5 Turbo，适用于各种文本生成和理解任务',
      displayName: 'GPT-3.5 Turbo',
      enabled: true,
      id: 'gpt-3.5-turbo',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-4',
      enabled: true,
      id: 'gpt-4',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-3.5 Turbo (0125)',
      functionCall: true,
      id: 'gpt-3.5-turbo-0125',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (1106)',
      functionCall: true,
      id: 'gpt-3.5-turbo-1106',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo Instruct',
      id: 'gpt-3.5-turbo-instruct',
      tokens: 4096,
    },
    {
      displayName: 'GPT-3.5 Turbo 16K',
      id: 'gpt-3.5-turbo-16k',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (0613)',
      id: 'gpt-3.5-turbo-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      displayName: 'GPT-3.5 Turbo 16K (0613)',
      id: 'gpt-3.5-turbo-16k-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      displayName: 'GPT-4 Turbo Preview',
      functionCall: true,
      id: 'gpt-4-turbo-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Preview (0125)',
      functionCall: true,
      id: 'gpt-4-0125-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Vision Preview (1106)',
      id: 'gpt-4-1106-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4 Turbo Preview (1106)',
      functionCall: true,
      id: 'gpt-4-1106-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 (0613)',
      functionCall: true,
      id: 'gpt-4-0613',
      tokens: 8192,
    },
    {
      displayName: 'GPT-4 32K',
      functionCall: true,
      id: 'gpt-4-32k',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-4 32K (0613)',
      functionCall: true,
      id: 'gpt-4-32k-0613',
      tokens: 32_768,
    },
    {
      description: 'GPT-4 Turbo 视觉版',
      displayName: 'GPT-4 Turbo',
      functionCall: true,
      id: 'gpt-4-turbo',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4 ALL',
      enabled: true,
      files: true,
      id: 'gpt-4-all',
      tokens: 32_768,
      vision: true,
    },
    {
      description: 'GPT-4 视觉版，支持视觉任务',
      displayName: 'GPT-4 Vision Preview',
      enabled: true,
      id: 'gpt-4-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'GPT-4 Turbo 视觉版 (240409)',
      displayName: 'GPT-4 Turbo Vision (240409)',
      functionCall: true,
      id: 'gpt-4-turbo-2024-04-09',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'Step-V1',
      enabled: true,
      id: 'step-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Step-V1 Vision',
      enabled: true,
      files: true,
      id: 'step-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: 'Moonshot-V1',
      enabled: true,
      id: 'moonshot-v1',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: 'Moonshot-V1 Vision',
      enabled: true,
      files: true,
      id: 'moonshot-v1-vision',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'Qwen Chat',
      enabled: true,
      functionCall: false,
      id: 'qwen-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Qwen Chat PLUS',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'qwen-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: 'Bing-3.5 Net',
      enabled: true,
      id: 'bing-3.5',
      tokens: 8192,
    },
    {
      displayName: 'Bing-4 32K',
      enabled: true,
      id: 'bing-4-32k',
      tokens: 8192,
    },
    {
      displayName: 'Bing-4 Vision',
      enabled: true,
      id: 'bing-4-vision',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Coze-3.5 Net',
      enabled: true,
      id: 'coze-3.5',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Coze-4 Net',
      enabled: true,
      id: 'coze-4',
      tokens: 8192,
    },
    {
      displayName: 'Coze-4 Vision',
      enabled: true,
      id: 'coze-4-vision',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'ChatGLM-V1',
      enabled: true,
      id: 'glm-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'ChatGLM-V1 Vision',
      enabled: true,
      files: true,
      id: 'glm-v1-vision',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Metaso-Concise-Net',
      id: 'concise',
      tokens: 8192,
    },
    {
      displayName: 'Metaso-Detail-Net',
      enabled: true,
      id: 'detail',
      tokens: 8192,
    },
    {
      displayName: 'Metaso-Research-Net',
      id: 'detail',
      tokens: 8192,
    },
    {
      displayName: 'Metaso-Concise-Scholar',
      id: 'concise-scholar',
      tokens: 8192,
    },
    {
      displayName: 'Metaso-Detail-Scholar',
      enabled: true,
      id: 'detail-scholar',
      tokens: 8192,
    },
    {
      displayName: 'Metaso-Research-Scholar',
      id: 'research-scholar',
      tokens: 8192,
    },
    {
      displayName: 'SparkDesk-V1',
      enabled: true,
      id: 'SparkDesk-v1',
      tokens: 8192,
      // vision: true,
    },
    // {
    //   displayName: 'SparkDesk-V1 Vision',
    //   enabled: true,
    //   files: true,
    //   id: 'SparkDesk-v1-vision',
    //   tokens: 8192,
    //   vision: true,
    // },
    {
      displayName: 'GPTS Scholar',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-kZ0eYXlJe',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPTS Consensus',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-bo0FiWLY7',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPTS Logo Designer',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-gFt1ghYJl',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPTS Image Generator',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-pmuQfob8d',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPTS Data Analysis',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-jBdvgesNC',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPTS Research Assistant',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-UfFxTDMxq',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPTS Professional Coder',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-2DQzU5UZl',
      tokens: 32_768,
      vision: true,
    },
  ],
  enabled: true,
  id: 'openai',
};

export default OpenAI;
