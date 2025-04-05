import { promises as fs } from "fs";

import { DiscoverSlide } from "@/Types";
import SectionTitle from "../common/SectionTitle";
import DiscoverSlides from "./DiscoverSlides";

export default async function Discover() {
  const file = await fs.readFile(process.cwd() + "/data/discover.json", "utf8");
  const slideList: DiscoverSlide[] = JSON.parse(file);

  return (
    <section className="overflow-x-hidden">
      <div className="wrapper">
        <div className="space-y-[54px]">
          <div className="flex items-center justify-center">
            <SectionTitle title="discover" underlineWidth="43%" />
          </div>

          <div>
            <DiscoverSlides slideList={slideList} />
          </div>
        </div>
      </div>
    </section>
  );
}
