let instance = null;

export default class {
  constructor() {
    if (!instance) {
      instance = this;
      this.languages = {};
      this.current_lang = null;
    }
    return instance;
  }
  add_language(id, lang) {
    this.languages[id] = lang;
    if (!this.current_lang) this.current_lang = id;
  }
  add_entry(key, id, string) {
    this.languages[id].entries[key] = string;
  }
  lookup(key, id) {
    console.log('getting ', key, ' from ', id);
    console.log(this.languages[id]);
    return this.languages[id].entries[key]
  }
  get_parent(id) {
    return this.languages[id].parent
  }
  localize(key, id) {
    if (!id) id = this.current_lang;
    while (id != null) {
      let s = this.lookup(key, id);
      if (s) return s;
      else id = this.get_parent(id);
    }
    return key;
  }
}
