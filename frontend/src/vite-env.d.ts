/// <reference types="vite/client" />

declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const content: DocumentNode;
  export default content;
}
