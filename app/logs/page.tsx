import { getSortedPostsData } from "../../lib/posts";
import LogList from "../components/LogList";
import { Hash } from "lucide-react";

export default function Logs() {
  const logs = getSortedPostsData();

  return (
    <div className="min-h-screen pt-32 px-6 pb-40 max-w-5xl mx-auto">
      <div className="mb-20 border-b border-white/10 pb-8">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tighter">
            SYSTEM <span className="text-neon-purple">LOGS</span>
        </h1>
        <div className="flex items-center gap-4 text-gray-400 font-mono text-xs md:text-sm">
            <Hash size={14} className="text-neon-purple" />
            <span>/// ARCHIVED_TRANSMISSIONS</span>
            <span className="text-neon-purple/50">|</span>
            <span>ENTRIES: {logs.length}</span>
        </div>
      </div>
      
      <LogList logs={logs} />
    </div>
  );
}