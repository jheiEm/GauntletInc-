import { Counter } from "../ui/counter";

export function Stats() {
  return (
    <>
      <div className="h-1 bg-gradient-to-r from-secondary to-accent"></div>
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Counter end={50} prefix="" suffix="+" />
              <p className="text-xl">Projects Completed</p>
            </div>
            <div className="p-6">
              <Counter end={25} delay={0.2} />
              <p className="text-xl">Industry Specialists</p>
            </div>
            <div className="p-6">
              <Counter end={8} delay={0.4} />
              <p className="text-xl">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
