export * from "./error-core";
export * from "./client";
export * from "./monitor";
import { initCodeError } from "./error-core";

export function init() {
  initCodeError();
}
