import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@test/konva",
  //@ts-ignore
  app: () => System.import("@test/konva"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
