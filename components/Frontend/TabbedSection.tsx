import React from "react";
import TabItems from "./TabItems";
import SectionHeading from "../SectionHeading";

const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <SectionHeading title="Browse your Doctors By." />
              <p className="text-base text-body-color dark:text-dark-6">
                Choose from thousands of providers at every day affordable. Book online today.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">
        <TabItems />
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
