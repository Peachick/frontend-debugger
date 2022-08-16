function toLower(str: string) {
  if (!str) return str;
  return str.toLowerCase();
}
let lastEvent: Event | null = null;
["click", "mousemove", "mouseover", "mousedown", "mouseenter"].forEach(
  (eventName) => {
    window.addEventListener(eventName, (event: Event) => {
      lastEvent = event;
    });
  }
);
function getLastEvent() {
  return lastEvent;
}
function getSelectors(elems: Element[] | Document[] | Window[]) {
  return elems
    ?.map((elem) => {
      if (elem instanceof Document || elem instanceof Window) return "";
      let selector = toLower(elem.nodeName);
      if (elem.id) {
        selector += `#${elem.id}`;
      } else if (elem.className) {
        selector += `.${elem.className.split(" ").join(".")}`;
      }
      return selector;
    })
    .filter((elem) => elem)
    .reverse()
    .join(" > ");
}
function getSelector(event: any) {
  if (Array.isArray(event.path)) {
    return getSelectors(event.path);
  }
}

export function initCodeError() {
  // 监听常规错误
  window.addEventListener(
    "error",
    (e) => {
      const ltError = getLastEvent();
      console.log(ltError);
      console.log(e);
      console.log(beautyError(e, ltError));
    },
    true
  );

  // promise
  window.addEventListener(
    "unhandledrejection",
    (e) => {
      console.log(e);
    },
    true
  );
}

// 数据封装
interface IReportBaseData {
  type: string;
  message: string;
  position: string;
  ip?: string;
}
interface IReportWebData extends IReportBaseData {
  ttl: number;
  stack: string;
  selector: string;
  screenWidth: number;
  screenHeight: number;
  platform: string;
}
function beautyError(event: ErrorEvent, ltEvent: Event | null): IReportWebData {
  return {
    ttl: Date.now(),
    type: event.type,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    message: event.message,
    stack: event.error.stack,
    position: `${event?.lineno}:${event?.colno}`,
    selector: ltEvent ? getSelector(ltEvent) : "",
    platform: navigator.platform,
  };
}
