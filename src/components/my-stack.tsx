import { cn } from "@/lib/utils";
import { Marquee } from "@/components/marquee";

const stacks = ["Javascript", "NextJS","ReactJS", "NodeJS", "Prisma", "Python", "Figma", "AI", "Tainwind CSS"];

const firstRow = stacks.slice(0, stacks.length / 3);
const secondRow = stacks.slice(stacks.length / 3);
const thirdRow = stacks.slice(stacks.length / 3);

const ReviewCard = ({
  name
}: {
 name:string
}) => {
  return (
    <div className="py-2 px-4 rounded-xl bg-gray-900 text-white">

        <p>{name}</p>
    </div>
      );
};

export function MyStack() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review} name={review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review} name={review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review} name={review} />
        ))}
      </Marquee>
    </div>
  );
}
