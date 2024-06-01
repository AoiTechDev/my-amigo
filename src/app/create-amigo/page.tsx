import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const CreateAmigo = () => {
  return (
    <div className="min-h-screen pt-24">
      <MaxWidthWrapper className="flex-center">
        <div className="flex-1">asd</div>
        <div className="flex-1 ">
          <Tabs defaultValue="account" className="w-full flex flex-col  ">
            <TabsList className="">
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="mustache">Mustache</TabsTrigger>
              <TabsTrigger value="sombreros">Sombreros</TabsTrigger>
            </TabsList>
            <TabsContent value="frameworks">
              Make changes to your account here.
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
