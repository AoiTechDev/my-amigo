"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type SelectedTab = "frameworks" | "mustache" | "sombreros";
const CreateAmigo = () => {
  const [selectedTab, setSelectedTab] =
    React.useState<SelectedTab>("frameworks");

  const handleTabChange = (value: SelectedTab) => {
    setSelectedTab(value);
  };
  return (
    <div className="min-h-screen pt-24">
      <MaxWidthWrapper className="flex-center flex-col lg:flex-row">
        <div className="flex-1 min-h-[400px]">asd</div>
        <div className=" min-h-[400px]">
          <Tabs defaultValue="frameworks" className="w-full  flex flex-col  "> 
            <TabsList className="">
              <TabsTrigger
                value="frameworks"
                onClick={() => handleTabChange("frameworks")}
              >
                Frameworks
              </TabsTrigger>
              <TabsTrigger
                value="mustache"
                onClick={() => handleTabChange("mustache")}
              >
                Mustache
              </TabsTrigger>
              <TabsTrigger
                value="sombreros"
                onClick={() => handleTabChange("sombreros")}
              >
                Sombreros
              </TabsTrigger>
            </TabsList>
            <TabsContent value="frameworks" className="flex-center gap-2">
              <div className="grid grid-cols-4  gap-4">
                {[...Array(16)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 flex-center w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-md"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mustache">
              Change your password here.
            </TabsContent>
            <TabsContent value="sombreros">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CreateAmigo;
