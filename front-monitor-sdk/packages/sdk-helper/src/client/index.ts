export interface IClientCtor {
  builder: string;
}
export class Client  {
  builder: string;
  constructor(opts: IClientCtor) {
    this.builder = opts.builder;
  }

  setup() {
    console.log('setup..')
  }
}

