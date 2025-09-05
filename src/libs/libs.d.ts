export interface IControllerResponse<T extends object | undefined> {
  data?: T | undefined;
  error?: string;
}
