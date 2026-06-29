export const manifest = {
  screens: {
    scr_9hbevj: { name: "Home", route: "/#home", position: { "x": 160, "y": 2200 } },
    scr_xtw0m6: { name: "About", route: "/#about", position: { "x": 1560, "y": 2200 } },
    scr_4ffph2: { name: "Skills", route: "/#skills", position: { "x": 2960, "y": 2200 } },
    scr_c4ro5x: { name: "Projects", route: "/#projects", position: { "x": 4360, "y": 2200 } },
    scr_2uannf: { name: "Contact", route: "/#contact", position: { "x": 5760, "y": 2200 } }
  },
  sections: {
    sec_7gxmdh: { name: "Authentication flow", x: 0, y: 0, width: 2920, height: 1180 },
    sec_4vhdg1: { name: "Portfolio navigation", x: 0, y: 1980, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_7gxmdh", children: [] },
  { kind: "section", id: "sec_4vhdg1", children: [
    { kind: "screen", id: "scr_9hbevj" },
    { kind: "screen", id: "scr_xtw0m6" },
    { kind: "screen", id: "scr_4ffph2" },
    { kind: "screen", id: "scr_c4ro5x" },
    { kind: "screen", id: "scr_2uannf" }]
  }]

};