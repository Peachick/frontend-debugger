
import { Client, IClientCtor } from "../client";

function toStr(str: any) {
  return JSON.stringify(str);
}

function toString(target: any) {
  return class extends target {
    hh() {
      return toStr(this);
    }
  } as any
}

interface IBaseMonitor {
  client: Client
}
abstract class BaseMonitor {
  client: Client;
  constructor({ client }: IBaseMonitor) {
    this.client = client;
  }
  abstract init(): void;
}

@toString
export class ErrorMonitor extends BaseMonitor {
  type: string  = "error";
  constructor(args: IBaseMonitor) {
    super(args);
    this.type = "error";
  }
  init() : void {
    window.addEventListener(
      "error",
      (e) => {
        console.log(e)
      },
      true
    );
  }
}

const error = new ErrorMonitor({ client: new Client({ builder: '' }) });
// @ts-ignore
console.log(error.hh());
error.client.setup();
