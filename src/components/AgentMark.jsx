const AgentMark = ({ className = 'w-11 h-11', spinning = false }) => (
  <img
    src="/agent-icon.png"
    alt="Sumit Karki"
    className={`${className} rounded-full object-cover shadow-[0_8px_24px_rgba(228,90,60,0.28)] ring-2 ring-coral/30 ${
      spinning ? 'animate-float' : ''
    }`}
  />
);

export default AgentMark;
