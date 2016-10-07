let instance = null;

export default class {
  static get languages() {
    if (!this._languages) this._languages = {};
    return this._languages;
  }
  static get current_lang() {
    return this._current_lang;
  }
  static set current_lang(val) {
    this._current_lang = val;
  }
  static add_language(id, lang) {
    this.languages[id] = lang;
    if (!this.current_lang) this.current_lang = id;
  }
  static add_entry(key, id, string) {
    this.languages[id].entries[key] = string;
  }
  static lookup(key, id) {
    return this.languages[id].entries[key];
  }
  static get_parent(id) {
    return this.languages[id].parent;
  }
  static localize(key, id=this.current_lang) {
    while (id != null) {
      let s = this.lookup(key, id);
      if (s) return s;
      else id = this.get_parent(id);
    }
    return key;
  }
}
