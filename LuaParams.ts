export type ILuaParams = {
  key: string;
  argv: string;
};

export default class {
  public rawParams: ILuaParams[] = [];

  constructor(params?: ILuaParams | ILuaParams[]) {
    if (params !== undefined) {
      this.add(params);
    }
  }

  public add(params: ILuaParams | ILuaParams[]) {
    if (Array.isArray(params)) {
      for (const p of params) {
        this.rawParams.push(p);
      }
    } else {
      this.rawParams.push(params);
    }
  }

  public argvCount(): number {
    return this.rawParams.length;
  }

  public argvList(): string[] {
    const list: string[] = [];
    for (const p of this.rawParams) {
      list.push(p.key);
    }
    for (const p of this.rawParams) {
      list.push(p.argv);
    }
    return list;
  }
}
