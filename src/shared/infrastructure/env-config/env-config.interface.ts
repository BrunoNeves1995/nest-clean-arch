export interface IEnvConfig {
  getAppPort(): number; //returns the application port
  getNodeEnv(): string; //returns the node environment (development, production, etc.)
}
