// import { StorageStack } from "./StorageStack";
import { App } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";
// import { AuthStack } from "./AuthStack";

/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(ApiStack);
}
