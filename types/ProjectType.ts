import { Url } from "url";

type ProjectType = {
  name: string;
  techs?: Array<string>;
  description: string;
  repository: string;
  imgRef: string;
  liveDemo: string;
  published?: Boolean;
};

export default ProjectType;
