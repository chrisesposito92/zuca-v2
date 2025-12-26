declare module "mammoth/mammoth.browser" {
  interface ExtractRawTextResult {
    value: string;
    messages?: unknown[];
  }

  export function extractRawText(options: { arrayBuffer: ArrayBuffer }): Promise<ExtractRawTextResult>;

  const mammoth: {
    extractRawText: typeof extractRawText;
  };

  export default mammoth;
}
