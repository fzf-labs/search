interface ChromeMessage {
  type: string;
  query?: string;
  data?: {
    s?: string[];
    [key: string]: unknown;
  };
  success?: boolean;
  error?: string;
}

declare namespace chrome {
  export namespace runtime {
    export function sendMessage(
      message: ChromeMessage,
      callback?: (response: ChromeMessage) => void
    ): void;
  }
}

// 扩展 Window 接口
declare interface Window {
  chrome?: typeof chrome;
} 