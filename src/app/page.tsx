import { HydrateClient } from "~/trpc/server";
import { TradingViewChart } from "~/app/_components/TradingViewChart";
import { JupiterSwap } from "~/app/_components/JupiterSwap";

export default function Home() {
  return (
    <>
      <HydrateClient>
        <main className="bg-gradient-to-b from-[#121826] to-[#15162c] text-white">
          <div className="w-full py-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-[4rem] text-[#14F195] text-center">
              TM<span className="text-white">-</span><span className="text-[#9945FF]">10</span>
            </h1>
          </div>
        </main>
      </HydrateClient>

      <div className="flex h-[calc(100vh-88px)] bg-gradient-to-b from-[#121826] to-[#15162c]">
        <div className="w-3/4">
          <TradingViewChart 
            symbol="COINBASE:SOLUSD" 
            theme="dark"
          />
        </div>
        <div className="w-1/4">
          <JupiterSwap />
        </div>
      </div>
    </>
  );
}
