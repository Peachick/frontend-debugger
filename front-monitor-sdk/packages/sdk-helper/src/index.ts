export * from "./error-core";
import { initCodeError } from "./error-core";

export function init() {
  initCodeError();
}
