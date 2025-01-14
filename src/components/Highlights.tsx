import { db } from "@/lib/db";
import ComponentCard from "./ComponentCard";

const HighLights = async () => {
  const publicComponents = await db.project.findMany({
    where: {
      isPublic: true,
    },
    include: {
      user: true,
    },
  });
  return (
    <div id="explore" className="">
      <h2 className="text-[clamp(2.5rem,10vw,5rem)]  font-cal py-2 text-center">
        Explore
      </h2>
      <section className="grid grid-cols-2 gap-4">
        {publicComponents.map((component) => (
          <ComponentCard project={component} key={component.id} />
        ))}
      </section>
    </div>
  );
};

export default HighLights;
