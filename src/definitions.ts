export interface CallkitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
